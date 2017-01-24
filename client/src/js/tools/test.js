// Copyright (C) 2016 Göteborgs Stad
//
// Denna programvara är fri mjukvara: den är tillåten att distribuera och modifiera
// under villkoren för licensen CC-BY-NC-SA 4.0.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the CC-BY-NC-SA 4.0 licence.
//
// http://creativecommons.org/licenses/by-nc-sa/4.0/
//
// Det är fritt att dela och anpassa programvaran för valfritt syfte
// med förbehåll att följande villkor följs:
// * Copyright till upphovsmannen inte modifieras.
// * Programvaran används i icke-kommersiellt syfte.
// * Licenstypen inte modifieras.
//
// Den här programvaran är öppen i syfte att den skall vara till nytta för andra
// men UTAN NÅGRA GARANTIER; även utan underförstådd garanti för
// SÄLJBARHET eller LÄMPLIGHET FÖR ETT VISST SYFTE.
//
// https://github.com/Johkar/Hajk2

var ToolModel = require('tools/tool');

/**
 * @typedef {Object} SearchModel~SearchModelProperties
 * @property {string} type - Default: search
 * @property {string} panel - Default: searchpanel
 * @property {string} toolbar - Default: bottom
 * @property {string} icon - Default: fa fa-search icon
 * @property {string} title - Default: Sök i kartan
 * @property {string} visible - Default: false
 * @property {string} value
 * @property {string} filter - Default: "*"
 * @property {string} filterVisible - Default: false
 * @property {string} markerImg - Default: "assets/icons/marker.png"
 * @property {number} maxZoom - Default: 14
 */
var TestModelProperties = {
  type: 'search',
  panel: 'testpanel',
  toolbar: 'bottom',
  icon: 'fa fa-eyedropper icon',
  title: 'Test',
  visible: false,
  text: "Test"
};

/**
 * Prototype for creating a search model.
 * @class
 * @augments {external:"Backbone.Model"}
 * @param {SearchModel~SearchModelProperties} options - Default options
 */
var TestModel = {
  /**
   * @instance
   * @property {SearchModel~SearchModelProperties} defaults - Default settings
   */
  defaults: TestModelProperties,

  initialize: function (options) {
    ToolModel.prototype.initialize.call(this);
  },

  configure: function (shell) {
    this.set('map', shell.getMap().getMap());
  },

  /**
   * @description
   *
   *   Handle click event on toolbar button.
   *   This handler sets the property visible,
   *   wich in turn will trigger the change event of navigation model.
   *   In pracice this will activate corresponding panel as
   *   "active panel" in the navigation panel.
   *
   * @instance
   */
  clicked: function () {
    console.log("Map", this.get('map'));
    this.set('visible', true);
  },
};

/**
 * Search model module.<br>
 * Use <code>require('models/search')</code> for instantiation.
 * @module SearchModel-module
 * @returns {SearchModel}
 */
module.exports = ToolModel.extend(TestModel);
