# Cube Rule Database

## About

This is the database of food items categorized according to [the cube rule](https://cuberule.com/). In essence, food is categorized according to starch location.

### Categories

The Cube Rule Database uses most of the categories from the Cube Rule website and makes some modifications and additions.

Food can be categorized as:

1. Toast - starch on one side
2. Sandwich - starch on two opposite sides
3. Taco - starch on three sides, forming a U shape
4. Sushi - starch on four sides, wrapping around the center
5. Bread Bowl (formerly Quiche) - starch on five sides
6. Dumpling (formerly Calzone) - starch on all sides
7. Rice (new) - separate, scattered multiple pieces of starch
8. Salad - no starch

### Technologies

- [Eleventy](https://www.11ty.io/) - static site generator
- [Grunt](https://gruntjs.com/) - asset compiling/task runner
- [Liquid](https://shopify.github.io/liquid/) - templating language

## Contributing

PRs are encouraged for adding new food items to the database.

### Getting Started

1. Clone this repository.
1. Make sure you have the Grunt CLI installed globally: `npm install -g grunt-cli`
1. Install dependencies: `npm install`
1. Compile assets: `grunt`
    - SCSS files will be compiled and minified in the `_site` directory as CSS.
    - Liquid and Markdown files will be generated in the `_site` directory as static HTML.
1. Run the site: `npx eleventy --serve`. You can now visit the site at `http://localhost:8080`. Changes to non-asset files will be watched.
1. To watch other file changes while you work, including SCSS and JS: `grunt watch`

### Adding New Food Items

To add a food to the Cube Rule Database, create a YAML file in `_data/food`. The file should be named the name of the food in kebob case, e.g. `slice-of-pie.yaml`. Then fill out the following template.

### Template

```yaml
name: # e.g. slice of pie
plural: # e.g. slices of pie
with_article: # e.g. a slice of pie
tags:
  - # Must be toast, sandwich, taco, sushi, bread_bowl, dumpling, rice, and/or salad. If using multiple tags, please provide explanations below.
toast: # optional explanation for why the food item is toast
sandwich: # optional explanation for why the food item is a sandwich
taco: # optional explanation for why the food item is a taco
sushi: # optional explanation for why the food item is a sushi
bread_bowl: # optional explanation for why the food item is a bread bowl
dumpling: # optional explanation for why the food item is a dumpling
rice: # optional explanation for why the food item is rice
salad: # optional explanation for why the food item is a salad
```
