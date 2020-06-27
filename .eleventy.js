const yaml = require('js-yaml');

module.exports = eleventyConfig => {
  let foodList = [];
  const categoryTags = ['toast', 'sandwich', 'taco', 'sushi', 'bread_bowl', 'dumpling', 'rice', 'salad'];

  eleventyConfig.addCollection('food', collection => {
    const foodObject = collection.items[0].data.food;

    foodList = Object.values(foodObject).filter(food => {
      // Remove empty objects
      return Object.keys(food).length !== 0;
    });

    return foodList;
  });

  // Add categories collection
  eleventyConfig.addCollection('categories', collection => {
    const categoriesObject = collection.items[0].data.categories;

    return Object.values(categoriesObject);
  });

  // Add collection for each category
  categoryTags.forEach(categoryTag => {
    eleventyConfig.addCollection(categoryTag, collection => {
      return foodList.filter(food => food.tags.includes(categoryTag));
    });
  });

  eleventyConfig.addFilter('parameterize', value => {
    return value.toLowerCase().replace(/[\W]+/g, '-');
  });

  const lowercaseWords = [
    // Articles
    'a', 'the',
    // Short conjunctions
    'and', 'but', 'for', 'nor', 'or',
    // Common prepositions
    'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'by', 'despite', 'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'out', 'outside', 'over', 'past', 'round', 'since', 'than', 'through', 'to', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'via', 'with', 'within', 'without'
  ];

  eleventyConfig.addFilter('titleize', value => {
    return value.split(' ').map((word, i) => {
      if (i === 0 || !lowercaseWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    }).join(' ');
  });

  eleventyConfig.addFilter('underscoreize', value => {
    return value.toLowerCase().replace(/[\W]+/g, '_');
  });

  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));

  eleventyConfig.addPassthroughCopy('.nojekyll');

  return {
    templateFormats : ['liquid'],
  }
};
