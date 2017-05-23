# Slugifier

Slugs are Human readable URLs created from a string. They normally identify a resource, while keeping it fairly readable for normal people.
Used normally in GET requests, they are very good for SEO, has they increase the chances of a higher score on page indexing on most search engines.

This tool will create a slug based on a given string

Optionally you can send a set of parameters that will affect the slugification. Those parameters are:
* separator: Defines a different separator (default is "-")
* truncate: (Number) Truncates the slug at nth char. Sending 0 or NaN will not truncate. Defaults to 0;
* lowercase: (boolean) Determines if all chars are to be lowercased. Defaults to yes;
* symbols: (boolean) Determines if symbols are to be converted. Defaults to yes;

To use it see the following examples:

```javascript
// simplest implementation
var slugifier = new Slugifier();
console.log(slugifier.slug('Some Random String'));
// Output: some-random-string

// Using configs
var slugifier_Max10 = new Slugifier({ separator: "_", truncate: 10 });
console.log(slugifier_Max10.slug('Some Random String'));
// Output: some_rando
```

You can find a online version of this tool at the following url: http://pedroluisf.com/demos/slugifier