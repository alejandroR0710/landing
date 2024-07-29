// src/utils/imageLoader.js

const importAll = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((item) => {
        images[item.replace('./', '')] = requireContext(item);
    });
    return images;
};

const images = importAll(require.context('../assets/Images', true, /\.(png|jpe?g|webp)$/));

export default images;
