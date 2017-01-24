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

var Panel = require('views/panel');
/**
 * @class
 */
var TestPanelView = {
  /**
   * Get initial state.
   * @instance
   * @return {object}
   */
  getInitialState: function() {
    return {
      text: this.props.model.get('text')
    };
  },

  /**
   * Triggered when component updates.
   * @instance
   */
  componentWillUnmount: function () {
    this.props.model.off('change:text');
  },

  /**
   * Triggered when the component is successfully mounted into the DOM.
   * @instance
   */
  componentDidMount: function () {
    this.props.model.on('change:text', () => {
      this.setState({
        text: this.props.model.get('text')
      });
    });
  },

  changeText: function () {
    this.props.model.set('text', 'Hej');
  },

  /**
   * Render the view
   * @instance
   * @return {external:ReactElement}
   */
  render: function () {
    return (
      <Panel title="Länk till karta" onCloseClicked={this.props.onCloseClicked}>
        <div className="panel-content">
          <div>
            <div>{this.state.text}</div>
            <button onClick={(e) => { this.changeText() }}>Klicka här</button>
          </div>
        </div>
      </Panel>
    );
  }
};

/**
 * AnchorPanelView module.<br>
 * Use <code>require('views/anchorpanel')</code> for instantiation.
 * @module AnchorPanelView-module
 * @returns {AnchorPanelView}
 */
module.exports = React.createClass(TestPanelView);
