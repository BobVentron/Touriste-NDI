import json
import cherrypy, os, os.path

from mako.template import Template
from mako.lookup import TemplateLookup
import requests

db_HOST = "localhost"#changer si nécessaire
db_USER = "root"#changer
db_PASSWD = "1234"#changer
db_PORT = 3306

# Configuration du moteur de templates Mako
mylookup = TemplateLookup(directories=['res/templates'], input_encoding='utf-8', module_directory='res/tmp/mako_modules')

class InterfaceWeb(object):    
#######################################################################################
#                        Page d'accueil                                               #
####################################################################################### 
    @cherrypy.expose
    def index(self):
        """Page d'accueil."""
        mytemplate = mylookup.get_template("index.html")
        return mytemplate.render()
    
    @cherrypy.expose
    def calendar(self) :
        mytemplate = mylookup.get_template("calendar.html")
        return mytemplate.render()
    
    
    @cherrypy.expose
    def butonCookie(self) :
        mytemplate = mylookup.get_template("boutonCookie.html")
        return mytemplate.render()
    
    @cherrypy.expose
    def cookie(self) :
        mytemplate = mylookup.get_template("cookie.html")
        return mytemplate.render()
    
    @cherrypy.expose
    def waterWeather(self, port=None):
        weather_data = None
        error_message = None
        BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
        ICON_URL = "http://openweathermap.org/img/wn/"
        
        # Si une ville est spécifiée, récupérer les données météo
        if port:
            params = {
                "q": port,
                "appid": "e7e87ddf5ee17846572597c477aa9b95",
                "units": "metric",  # Données en Celsius
                "lang": "fr"        # Données en français
            }
            try:
                response = requests.get(BASE_URL, params=params)
                response.raise_for_status()
                weather_data = response.json()
                # Ajouter l'URL de l'icône aux données météo
                weather_data['icon_url'] = f"{ICON_URL}{weather_data['weather'][0]['icon']}@2x.png"
            except requests.exceptions.RequestException:
                error_message = "Erreur lors de la récupération des données météo. Vérifiez le nom de la ville."

        # Rendu du template avec Mako
        mytemplate = mylookup.get_template("weather.html")
        return mytemplate.render(weather_data=weather_data, error_message=error_message)

    
if __name__ == '__main__':
    print("\033[93m______________________________________________________________________________________________________________________________________\n\n ________     ____     __    __   ______      _____    _____   ________    _____                       __      _   ______      _____     \n(___  ___)   / __ \    ) )  ( (  (   __ \    (_   _)  / ____\ (___  ___)  / ___/                      /  \    / ) (_  __ \    (_   _)    \n    ) )     / /  \ \  ( (    ) )  ) (__) )     | |   ( (___       ) )    ( (__        ________       / /\ \  / /    ) ) \ \     | |      \n   ( (     ( ()  () )  ) )  ( (  (    __/      | |    \___ \     ( (      ) __)      (________)      ) ) ) ) ) )   ( (   ) )    | |      \n    ) )    ( ()  () ) ( (    ) )  ) \ \  _     | |        ) )     ) )    ( (                        ( ( ( ( ( (     ) )  ) )    | |      \n   ( (      \ \__/ /   ) \__/ (  ( ( \ \_))   _| |__  ___/ /     ( (      \ \___                    / /  \ \/ /    / /__/ /    _| |__    \n   /__\      \____/    \______/   )_) \__/   /_____( /____/      /__\      \____\                  (_/    \__/    (______/    /_____(    \n                                                                                                                                         \n______________________________________________________________________________________________________________________________________\n\033[0m")
    rootPath = os.path.abspath(os.getcwd())
    try : 
        print(f"la racine du site est :\n\t{rootPath}\n\tcontient : {os.listdir()}")
        #initBase()
        cherrypy.quickstart(InterfaceWeb(), '/', 'config.txt')
    except Exception as e : 
        print(f"\033[91mErreur : {e}")
        print("\033[92m___________________________________________________________________________\033[0m\n")
        print('\033[92m########  ##    ## ########    #### \n##     ##  ##  ##  ##          #### \n##     ##   ####   ##          #### \n########     ##    ######       ##  \n##     ##    ##    ##               \n##     ##    ##    ##          #### \n########     ##    ########    ####\033[0m')
    except KeyboardInterrupt : #Erreur qui permet une fermeture plus "propre" quand l'utilisateur fait CTRL+C
        print("\n\033[92m___________________________________________________________________________\033[0m\n")
        print('\033[92m########  ##    ## ########    #### \n##     ##  ##  ##  ##          #### \n##     ##   ####   ##          #### \n########     ##    ######       ##  \n##     ##    ##    ##               \n##     ##    ##    ##          #### \n########     ##    ########    ####\033[0m')
