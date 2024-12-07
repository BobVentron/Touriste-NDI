# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1733464417.7938032
_enable_loop = True
_template_filename = 'res/templates/weather.html'
_template_uri = 'weather.html'
_source_encoding = 'utf-8'
_exports = ['title', 'body']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    pass
def _mako_inherit(template, context):
    _mako_generate_namespaces(context)
    return runtime._inherit_from(context, 'template.html', _template_uri)
def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        error_message = context.get('error_message', UNDEFINED)
        weather_data = context.get('weather_data', UNDEFINED)
        def body():
            return render_body(context._locals(__M_locals))
        __M_writer = context.writer()
        __M_writer('\r\n')
        __M_writer('\r\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'body'):
            context['self'].body(**pageargs)
        

        __M_writer('\r\n</div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_title(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        __M_writer('Water Weather - Météo Maritime')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        error_message = context.get('error_message', UNDEFINED)
        weather_data = context.get('weather_data', UNDEFINED)
        def body():
            return render_body(context)
        __M_writer = context.writer()
        __M_writer('\r\n<link rel="stylesheet" href="static/css/weather.css">\r\n<header>\r\n    <div class="banner">\r\n    </div>\r\n    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center sticky-top">\r\n        <div class="container-fluid">\r\n            <a class="navbar-brand mx-10" href="/index">Accueil</a>\r\n            <a class="navbar-brand mx-10" href="/calendar">Advent Calendar</a>\r\n            <a class="navbar-brand mx-10" href="/waterWeather">Water Weather</a>\r\n            <a class="navbar-brand mx-10" href="/butonCookie">Cookie Clicker</a>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n    <div class="weatherContent">\r\n        <h1 style="margin-top: 50px;">🌊 Water Weather - Météo Maritime</h1>\r\n    <form method="POST" action="/waterWeather">\r\n        <input type="text" name="port" placeholder="Entrez un port ou une ville côtière" required>\r\n        <button type="submit">Rechercher</button>\r\n    </form>\r\n\r\n')
        if error_message:
            __M_writer('        <div class="error">')
            __M_writer(str(error_message))
            __M_writer('</div>\r\n')
        elif weather_data:
            __M_writer('        <div class="weather">\r\n            <h2>Météo à ')
            __M_writer(str(weather_data['name']))
            __M_writer(', ')
            __M_writer(str(weather_data['sys']['country']))
            __M_writer('</h2>\r\n            <!-- Affichage de l\'icône météo -->\r\n            <img src="')
            __M_writer(str(weather_data['icon_url']))
            __M_writer('" \r\n                 alt="')
            __M_writer(str(weather_data['weather'][0]['description']))
            __M_writer('" \r\n                 class="weather-icon">\r\n            <p><strong>Condition :</strong> ')
            __M_writer(str(weather_data['weather'][0]['description'].capitalize()))
            __M_writer('</p>\r\n            <p><strong>Température :</strong> ')
            __M_writer(str(weather_data['main']['temp']))
            __M_writer('°C</p>\r\n            <p><strong>Ressenti :</strong> ')
            __M_writer(str(weather_data['main']['feels_like']))
            __M_writer('°C</p>\r\n            <p><strong>Humidité :</strong> ')
            __M_writer(str(weather_data['main']['humidity']))
            __M_writer('%</p>\r\n            <p><strong>Vitesse du vent :</strong> ')
            __M_writer(str(weather_data['wind']['speed']))
            __M_writer(' m/s</p>\r\n        </div>\r\n')
        __M_writer('\r\n    \r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "res/templates/weather.html", "uri": "weather.html", "source_encoding": "utf-8", "line_map": {"27": 0, "36": 1, "37": 2, "42": 43, "48": 2, "52": 2, "58": 3, "66": 3, "67": 25, "68": 26, "69": 26, "70": 26, "71": 27, "72": 28, "73": 29, "74": 29, "75": 29, "76": 29, "77": 31, "78": 31, "79": 32, "80": 32, "81": 34, "82": 34, "83": 35, "84": 35, "85": 36, "86": 36, "87": 37, "88": 37, "89": 38, "90": 38, "91": 41, "97": 91}}
__M_END_METADATA
"""
