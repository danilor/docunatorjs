module.exports = {
    title:{
        key: 'title',
        regex: new RegExp('(?:@title\\s)(.+)', 'i'),
        type:'single'
    },
    description:{
        key: 'description',
        regex: new RegExp('(?:@description\\s)(.+)', 'i'),
        type:'single'
    },
    category:{
        key: 'category',
        regex: new RegExp('(?:@category\\s)(.+)', 'i'),
        type:'single'
    },
    author:{
        key: 'author',
        regex: new RegExp('(?:@author\\s)(.+)', 'i'),
        type:'single'
    },
    version:{
        key: 'version',
        regex: new RegExp('(?:@version\\s)(.+)', 'i'),
        type:'single'
    },
    type:{
        key: 'type',
        regex: new RegExp('(?:@type\\s)(.+)', 'i'),
        type:'single'
    },
    access:{
        key: 'access',
        regex: new RegExp('(?:@access\\s)(.+)', 'i'),
        type:'single'
    },
    experimental:{
        key: 'experimental',
        regex: new RegExp('(?:@experimental\\s)(.+)', 'i'),
        type:'single'
    },
    copyright:{
        key: 'copyright',
        regex: new RegExp('(?:@copyright\\s)(.+)', 'i'),
        type:'single'
    },
    deprecated:{
        key: 'deprecated',
        regex: new RegExp('(?:@deprecated\\s)(.+)', 'i'),
        type:'single'
    },
    license:{
        key: 'license',
        regex: new RegExp('(?:@license\\s)(.+)', 'i'),
        type:'single'
    },
    order:{
        key: 'order',
        regex: new RegExp('(?:@order\\s)(.+)', 'i'),
        type:'single'
    },
    group:{
        key: 'group',
        regex: new RegExp('(?:@group\\s)(.+)', 'i'),
        type:'single'
    },
    since:{
        key: 'since',
        regex: new RegExp('(?:@since\\s)(.+)', 'i'),
        type:'single'
    },
    return:{
        key: 'return',
        regex: new RegExp('(?:@returns\\s)\\{(\\S+)\\}\\s\\-?\\s?(.+)', 'ig'),
        type:'array',
        indexes:[
            'type',
            'description'
        ]
    },
    link:{
        key: 'link',
        regex: regex = new RegExp('(?:@link\\s)(\\S+)', 'ig'),
        type: 'array',
        indexes:[
            'url'
        ]
    },
    example:{
        key: 'example',
        regex: regex = new RegExp('(?:@example)\\s\\{(.{1,4})\\}(.+)\\{\\\/(.{1,4})\\}', 'gmis'),
        type: 'array',
        indexes:[
            'lang',
            'code',
            'closeLang'
        ]
    },
    see:{
        key: 'see',
        type: 'array',
        regex: regex = new RegExp('(?:@see\\s)(\\S+)', 'ig'),
        type: 'array',
        indexes:[
            'reference'
        ]
    },
    snack:{
        key: 'snack',
        type: 'array',
        regex: regex = new RegExp('(?:@snack\\s)(\\S+)', 'ig'),
        type: 'array',
        indexes:[
            'id'
        ]
    },
    params:{
        key: 'params',
        regex: new RegExp('(?:@param\\s)\\{(\\S+)\\}\\s(\\S+)\\s\\-?\\s?(.+)', 'ig'),
        type: 'array',
        indexes: [
            'type', 'name', 'description'
        ]
    },
    errors:{
        key: 'errors',
        regex: new RegExp('(?:@error\\s)\\{(\\S+)\\}\\s\\-?\\s?(.+)', 'ig'),
        type:'array',
        indexes:[
            'type',
            'description'
        ]
    },
}