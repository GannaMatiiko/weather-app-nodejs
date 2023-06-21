const request = require('request');

const geocode = (address, callback) => {
    const url= `http://api.positionstack.com/v1/forward?access_key=8e828d2dc5152b66103e1a1ceb14ef6b&query=${encodeURIComponent(address)}&limit=1`;
    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.data === undefined || body.data.length === 0) {
            callback('Please provide valid search term', undefined)
        } else {
            const responseData = body.data;
            callback(undefined, {
                latitude: responseData[0].latitude,
                longitude: responseData[0].longitude,
                location: responseData[0].label
            })
        }
    })
}

module.exports = geocode;