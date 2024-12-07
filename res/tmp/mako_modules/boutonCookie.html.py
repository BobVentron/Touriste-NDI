# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1733463752.374629
_enable_loop = True
_template_filename = 'res/templates/boutonCookie.html'
_template_uri = 'boutonCookie.html'
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
        __M_writer('\r\n<link rel="stylesheet" href="static/css/boutonCookie.css">\r\n\r\n<header>\r\n    </div>\r\n    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center sticky-top">\r\n        <div class="container-fluid">\r\n            <a class="navbar-brand mx-10" href="/index">Accueil</a>\r\n            <a class="navbar-brand mx-10" href="/calendar">Advent Calendar</a>\r\n            <a class="navbar-brand mx-10" href="/podcast">Podcast</a>\r\n            <a class="navbar-brand mx-10" href="/waterWeather">Water Weather</a>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<div class="content1">\r\n    <p>Bienvenue dans notre enfer. Si vous pensiez qu\'un jeu sert à ce détendre et à se vider la tête, alors bienvenue dans l\'antonyme de votre définition d\'un jeu. Ici, tout à été pensé pour vous complexifier la vie, vous frustrer et vous tendre les nerds. Alors bienvenue dans le cauchemar de la satisfaction.</p>\r\n    <a id="playButton" href="/cookie">Play</a>\r\n    <script src="static/js/cookieBoutton.js"></script>\r\n</div>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "res/templates/boutonCookie.html", "uri": "boutonCookie.html", "source_encoding": "utf-8", "line_map": {"27": 0, "34": 1, "35": 2, "36": 3, "46": 3, "50": 3, "56": 4, "62": 4, "68": 62}}
__M_END_METADATA
"""
