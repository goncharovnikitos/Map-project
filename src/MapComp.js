import React from 'react';

import parse from 'html-react-parser';

export default
function Map(props) {
    let func = props.onPlace;

    return (
    <div className="map">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect x="0" y="0" width="200" height="200" fill="blue" strokeWidth="4"/>
                <circle cx="15" cy="15" r="10" fill="white" data-placeid = "1" onClick={func} />
                <circle cx="40" cy="15" r="10" fill="white" data-placeid = "2" onClick={func}/>
                <circle cx="65" cy="15" r="10" fill="white" data-placeid = "3" onClick={func}/>
                <circle cx="90" cy="15" r="10" fill="white" data-placeid = "4" onClick={func}/>
                <circle cx="115" cy="15" r="10" fill="white" data-placeid = "5" onClick={func}/>
            </g>
        </svg>
    </div>
    )



    let svg = '<div className="map">\n' +
        '            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">\n' +
        '                    <rect x="0" y="0" width="200" height="200" fill="blue" stroke-width="4"/>\n' +
        '                    <circle cx="15" cy="15" r="10" fill="white" data-placeid = "1" />\n' +
        '                <circle cx="40" cy="15" r="10" fill="white" data-placeid = "2" />\n' +
        '                <circle cx="65" cy="15" r="10" fill="white" data-placeid = "3" />\n' +
        '                <circle cx="90" cy="15" r="10" fill="white" data-placeid = "4" />\n' +
        '                <circle cx="115" cy="15" r="10" fill="white" data-placeid = "5" />' +
        '                </g>\n' +
        '            </svg>\n' +
        '        </div>';
    return parse(svg,
        {
            replace: function (domNode){
                console.log(domNode.attribs);
                if (domNode.attribs && domNode.attribs['data-placeid']) {
                    domNode.attribs = domNode.attribs || {};
                    domNode.attribs['onClick'] = func;
                    return React.createElement(domNode.name, domNode.attribs, domNode.children);
                }
            }
        });
}


