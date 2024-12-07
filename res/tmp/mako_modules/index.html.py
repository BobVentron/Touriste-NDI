# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1733572145.003968
_enable_loop = True
_template_filename = 'res/templates/index.html'
_template_uri = 'index.html'
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
        def body():
            return render_body(context._locals(__M_locals))
        __M_writer = context.writer()
        __M_writer("<!-- Templates de la page d'acceuil du site Web-->\r\n")
        __M_writer('\r\n')
        __M_writer('\r\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'body'):
            context['self'].body(**pageargs)
        

        __M_writer('\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_title(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        __M_writer('Accueil')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        def body():
            return render_body(context)
        __M_writer = context.writer()
        __M_writer('\r\n<link rel="stylesheet" href="static/css/index.css">\r\n<link rel="stylesheet" href="/static/css/earth.css">\r\n<link rel="stylesheet" href="/static/css/aquarium1.css">\r\n<header>\r\n    <div class="banner">\r\n    </div>\r\n    <nav class="navbar  sticky-top navbar-expand-lg navbar-light bg-light justify-content-center sticky-top">\r\n        <div class="container-fluid">\r\n            <a class="navbar-brand mx-10" href="/index">Accueil</a>\r\n            <a class="navbar-brand mx-10" href="/calendar">Advent Calendar</a>\r\n            <a class="navbar-brand mx-10" href="/waterWeather">Water Weather</a>\r\n            <a class="navbar-brand mx-10" href="/butonCookie">Cookie Clicker</a>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<div class="content">\r\n    <div class="container text-center text-white py-5">\r\n        <h1 class="font-Ocean25" style="font-size: 500%";>OCEAN BREATH</h1>\r\n        <p style="font-size: 150%;">Découvrez à quel point nous sommes proches de l\'eau.</p>\r\n    </div>\r\n\r\n\r\n    <div class="container py-5">\r\n        <div class="row align-items-center">\r\n            <!-- Text column -->\r\n            <div class="col-md-8">\r\n                <p class="text-white" style="text-align: justify;">\r\n                    La principale similitude entre l\'homme et la Terre réside dans leur composition en eau, ou monoxyde de dihydrogène. Le cerveau humain contient 75 % d\'eau, le sang 83 %, les muscles 76 % et même les os 22 %. De son côté, la Terre est composée de 71 % d\'eau, dont 96,5 % se trouve dans les océans. Cependant, cette ressource vitale est menacée par nos déchets, car nous y déversons nos ordures et tout ce qui ne peut pas être incinéré. Chaque année, entre 9 et 14 millions de tonnes de déchets plastiques finissent dans l\'océan. Il est donc urgent d\'agir. Nous vous invitons à en apprendre davantage sur l\'eau, les océans et leur relation avec l\'homme.\r\n                </p>\r\n            </div>\r\n            <!-- Image column -->\r\n            <div class="col-md-4 text-center">\r\n                <img src="static/images/brain.png" alt="brain" class="img-fluid" style="max-width: 50%;">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Section avec la Terre en 3D -->\r\n    <section class="earth-scene">\r\n        <div id="earth-container"></div>\r\n        <div class="earth-text" id="earth-text">\r\n            L’océan, pilier de la vie sur Terre, régule le climat, inspire la médecine et soutient notre bien-être. Pourtant, il est aujourd’hui menacé par la pollution, la surpêche et le réchauffement climatique, mettant en péril à la fois sa biodiversité et notre santé.\r\n        </div>\r\n    </section>\r\n\r\n    <div class="container text-center">\r\n        <p class="text-white" style="font-size: xx-large;">Poème l\'Océan et l\'homme</p>\r\n        <cite class="text-white" style="font-size: large; text-align: center;">\r\n            Océan comme Michel, Homme comme Michel<br>\r\n            Que des leçons comme un mag du Monde et<br>\r\n            Les vagues, bague du Monde, promesse brisée<br>\r\n            Des poissons qui passent entre elles<br><br>\r\n            Les horizons dansent, miroir infini<br>\r\n            Un théâtre mouvant où le monde se nie.<br>\r\n            Les abysses se tissaient mais s\'abîme<br>\r\n            Au fond, le silence, un cri solitaire.<br>\r\n            Au menu : du fretin, les hommes certains<br>\r\n            Prennent et reprennent jusqu’à demain<br>\r\n            Ils bâtissent des royaumes de sable et d’orgueil<br>\r\n            L’océan s’effrite sous le poids de leur deuil.<br>\r\n            Et soudain, l’océan, soupire en cadence<br>\r\n            Son souffle immense, son chant de vengeance<br>\r\n            Un rappel, sans dédain, que nul ne retient<br>\r\n            Homme comme Michel, mais jusqu’à quel chemin ?\r\n        </cite>\r\n    </div>\r\n\r\n    <div class="container text-center">\r\n        <p class="text-white" style="font-size: xx-large; padding-top: 50px;">Podcasts : </p>\r\n        <p class="text-white text-center" style="font-size: large;">Découvrez comment l’océan et le corps humain sont intimement liés : des secrets fascinants sur la vie, l’énergie et l’équilibre vous attendent dans notre podcast ! 🌊✨</p>\r\n    </div>\r\n    <div class="container text-center my-4">\r\n        <audio controls class="my-2">\r\n            <source src="/static/audio/podcast1.mp3" type="audio/mpeg">\r\n            Votre navigateur ne prend pas en charge l\'audio HTML5.\r\n        </audio>\r\n        <audio controls class="my-2">\r\n            <source src="/static/audio/podcast2.mp3" type="audio/mpeg">\r\n            Votre navigateur ne prend pas en charge l\'audio HTML5.\r\n        </audio>\r\n    </div>\r\n    \r\n    \r\n    <div class="container text-center" style="padding-top: 50px;">\r\n        <p class="text-white" style="font-size: xx-large;"></p>\r\n        <p class="text-white" style="font-size: x-large; text-align: justify;"> L\'océan c\'est comme une boite de chocolat, on ne sait jamais sur quoi on va tomber, et de fait, l\'Homme n\'en a exploré 5% et cartographié que 24,9%. Aujourd\'hui on connait mieux l\'espace que nos propres planètes. Pourtant, ce n\'est pas uniquement de notre faute, car la visite des profondeur de nos océans est la tâche la plus ardue qui soit, que ce soit organisme dangereux ou pression mortelle, ces explorations constituent des prises de risque considérables. Malgré tout, nous finirons bien un jour par dominer aussi bien l\'immensité de la surface que les abysses ténébreuses.</p>\r\n        <p class="text-white" style="font-size: x-large; text-align: justify;"> Mais est-ce vraiement souhaitable ?</p>\r\n    </div>\r\n\r\n\r\n\t<div class="container text-center" style="padding-top: 50px;">\r\n      <p class="text-white" style="font-size: xx-large; text-align: justify;">Clique sur les images, une surpise t\'attend :</p>\r\n    </div>\r\n\r\n    <div class="aquarium1" ></div>\r\n    <div class="aquarium2" style="margin-top: 55vh;"></div>\r\n    <div class="aquarium3" style="margin-top: 110vh;"></div>\r\n\r\n    <script src="static/js/aquarium1.js" async></script>\r\n    <script src="static/js/aquarium2.js" async></script>\r\n    <script src="static/js/aquarium3.js" async></script>\r\n\r\n\r\n\r\n    <!-- Section video game -->\r\n\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>\r\n    <script src="/static/js/earth.js"></script>\r\n</div>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "res/templates/index.html", "uri": "index.html", "source_encoding": "utf-8", "line_map": {"27": 0, "34": 1, "35": 2, "36": 3, "41": 115, "47": 3, "51": 3, "57": 4, "63": 4, "69": 63}}
__M_END_METADATA
"""
