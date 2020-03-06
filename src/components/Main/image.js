import React from "react";


import ImageGallery from "react-image-gallery";

const images = [
    {
        original: require('../../images/hopr.jpg'),
        thumbnail: require('../../images/hopr.jpg'),
    },

    {
        original: require('../../images/vino.jpg'),
        thumbnail: require('../../images/vino.jpg'),
    },


    {
        original: require('../../images/shoo.jpg'),
        thumbnail: require('../../images/shoo.jpg'),
    },

    {
        original: require('../../images/sav.jpg'),
        thumbnail: require('../../images/sav.jpg'), 
    },

    {
        original: require('../../images/pos.jpg'),
        thumbnail: require('../../images/pos.jpg'), 
    },

    {
        original: require('../../images/wedd.jpg'),
        thumbnail: require('../../images/wedd.jpg'), 
    },


   
];

class MyGallery extends React.Component {
    render(){
        return <ImageGallery items={images}  />
    }
}

export default  MyGallery;