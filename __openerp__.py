# -*- coding: utf-8 -*-
# Copyright 2017 Open Net Sàrl
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': "Scale Tare",
    'version': '9.0.1.0.0',
    'author': "Open Net Sàrl",
    'category': "Point of Sale",
    'summary': "allows to tare the scale from the PoS screen",
    'depends': ['web', 'point_of_sale'],
    'website': 'http://www.open-net.ch',
    'data': [
        'views/scale_tare_templates.xml',
    ],
    'demo': [
    ],
    'qweb': [
        'static/src/xml/tare_button.xml',
    ],
    'installable': True,
    'auto_install': False,
}
