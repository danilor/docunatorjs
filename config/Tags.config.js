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
    see:{
        key: 'see',
        type: 'array',
    },
    params:{
        key: 'params',
        regex: new RegExp('(?:@param\\s)\\{(\\S+)\\}\\s(\\S+)\\s\\-?\\s?(.+)', 'ig'),
        type: 'array',
        indexes: [
            'type', 'name', 'description'
        ]
    },
}