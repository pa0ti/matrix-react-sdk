/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

const React = require('react');
import PropTypes from 'prop-types';
import { _t } from '../../../languageHandler';
const sdk = require('../../../index');

module.exports = React.createClass({
    displayName: 'TopUnreadMessagesBar',

    propTypes: {
        onScrollUpClick: PropTypes.func,
        onCloseClick: PropTypes.func,
    },

    render: function() {
        return (
            <div className="mx_TopUnreadMessagesBar">
                <div className="mx_TopUnreadMessagesBar_scrollUp"
                        onClick={this.props.onScrollUpClick}>
                    <img src="img/scrollto.svg" width="24" height="24"
                        alt={_t('Scroll to unread messages')}
                        title={_t('Scroll to unread messages')} />
                    { _t("Jump to first unread message.") }
                </div>
                <img className="mx_TopUnreadMessagesBar_close mx_filterFlipColor"
                    src="img/cancel.svg" width="18" height="18"
                    alt={_t("Close")} title={_t("Close")}
                    onClick={this.props.onCloseClick} />
            </div>
        );
    },
});
