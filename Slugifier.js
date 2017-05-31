(function(global) {

    var Slugifier = function(options) {
        this.options = {
            separator: (options && options.separator) || '-',
            truncate: (options && options.truncate) || 0,
            lowercase: (options && options.lowercase !== undefined ? options.lowercase : true),
            symbols: (options && options.symbols !== undefined ? options.symbols : true)
        };
    };

    Slugifier.prototype.slug = function(string) {
        var result = string.toString();

        // Lower case?
        if (this.options.lowercase) {
            result = result.toLowerCase();
        }

        // Replace spaces with the separator
        result = result.replace(/\s+/g, this.options.separator);

        // Symbols
        if (this.options.symbols) {
            pattern = "[^\\w\\" + this.options.separator + "]+";
            regex = new RegExp(pattern, "g");
            result = result.replace(regex, '');
        }

        // Replace multiple separators with single separator
        var pattern = "\\" + this.options.separator + "\\" + this.options.separator+ "+";
        var regex = new RegExp(pattern, "g");
        result = result.replace(regex, this.options.separator);

        // Truncate if provided
        if (!isNaN(this.options.truncate) && this.options.truncate) {
            result = result.substring(0, this.options.truncate);
        }

        // Trim the string
        // from start
        pattern = "^\\" + this.options.separator + "+";
        regex = new RegExp(pattern, "g");
        result = result.replace(regex, '');

        // from end
        pattern = "\\" + this.options.separator + "+$";
        regex = new RegExp(pattern, "g");
        result = result.replace(regex, '');

        return result;
    };

    // Exporting
    if (typeof module !== 'undefined' && module.exports) {
        // export functions for use in Node
        module.exports = Slugifier;

    } else if (typeof define !== 'undefined' && define.amd) {
        // export function for use in AMD
        define([], function () {
            return Slugifier;
        });

    } else {

        // avoid overwriting any global
        if (global.Slugifier) {
            console.error('slugifier: already exists global.Slugifier');
        } else {
            global.Slugifier = Slugifier;
        }
    }

}(this) );