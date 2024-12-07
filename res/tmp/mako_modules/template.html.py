# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1733463090.1798782
_enable_loop = True
_template_filename = 'res/templates/template.html'
_template_uri = 'template.html'
_source_encoding = 'utf-8'
_exports = []


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        self = context.get('self', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('<!doctype html>\r\n<html lang="fr">\r\n  <head>\r\n    <meta charset="utf-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\r\n    <link href="static/css/bootstrap.min.css" rel="stylesheet">\r\n    <link rel="stylesheet" href="static/css/bootstrap.min.css" >\r\n    \r\n    <title>')
        __M_writer(str(self.title()))
        __M_writer('</title>\r\n  </head>\r\n  <body>\r\n\r\n    <script src="/static/js/jquery-3.5.0.min.js"></script>\r\n    <script src="/static/js/bootstrap.min.js"></script>\r\n    <script src="/static/js/bootstrap.bundle.min.js"></script>\r\n    <script src="/static/js/script.js"></script>\r\n    \r\n\t<header>\r\n    \r\n  </header>\r\n\r\n\r\n  </header>\r\n    \r\n\r\n\t')
        __M_writer(str( self.body() ))
        __M_writer('\r\n\r\n\r\n\r\n  <div class="footer">\r\n    <p>© 2024 Touriste.com - Made by Bermond Michel, Dieval Flavien, Fabien Roux, Hauersperger Louis, Carrot Jordan, Lonjon Alexis et Soleilhac Bastien  - IUT de Valence</p>\r\n  </div>\r\n\r\n  </body>\r\n</html>')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "res/templates/template.html", "uri": "template.html", "source_encoding": "utf-8", "line_map": {"16": 0, "22": 1, "23": 9, "24": 9, "25": 26, "26": 26, "32": 26}}
__M_END_METADATA
"""
