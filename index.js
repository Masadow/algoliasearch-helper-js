"use strict";
var AlgoliaSearchHelper = require( "./src/algoliasearch.helper" );
/**
 * The algoliasearch-helper module is a function that instanciate the helper.
 * @module algoliasearch-helper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial config of the search. It doesn't have to be a {SearchParamaters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */
function helper( client, index, opts ) {
  return new AlgoliaSearchHelper( client, index, opts );
}

/**
 * The version currently used
 * @member module:algoliasearch-helper.version
 */
helper.version = "2.0.2";

module.exports = helper;
