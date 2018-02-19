/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant 
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// All JavaScript in here will be loaded server-side

	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant 
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports = {
	  Avatar: __webpack_require__(3),
	  Comment: __webpack_require__(5),
	  CommentsBox: __webpack_require__(6)
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	var React = __webpack_require__(4);

	var Avatar = function (_React$Component) {
		_inherits(Avatar, _React$Component);

		function Avatar() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Avatar);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.getPhotoUrl = function (author) {
				return 'https://avatars.githubusercontent.com/' + author.GithubUsername + '?s=50';
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Avatar, [{
			key: 'render',
			value: function render() {
				return React.createElement('img', {
					src: this.getPhotoUrl(this.props.author),
					alt: 'Photo of ' + this.props.author.Name,
					width: 50,
					height: 50,
					className: 'commentPhoto'
				});
			}
		}]);

		return Avatar;
	}(React.Component);

	Avatar.propTypes = {
		author: PropTypes.object.isRequired
	};


	module.exports = Avatar;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	var Avatar = __webpack_require__(3);
	var React = __webpack_require__(4);

	var Comment = function (_React$Component) {
		_inherits(Comment, _React$Component);

		function Comment() {
			_classCallCheck(this, Comment);

			return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
		}

		_createClass(Comment, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'li',
					null,
					React.createElement(Avatar, { author: this.props.author }),
					React.createElement(
						'strong',
						null,
						this.props.author.Name
					),
					': ',
					this.props.children
				);
			}
		}]);

		return Comment;
	}(React.Component);

	Comment.propTypes = {
		author: PropTypes.object.isRequired
	};


	module.exports = Comment;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	var Comment = __webpack_require__(5);
	var React = __webpack_require__(4);

	var CommentsBox = function (_React$Component) {
		_inherits(CommentsBox, _React$Component);

		function CommentsBox() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, CommentsBox);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentsBox.__proto__ || Object.getPrototypeOf(CommentsBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				comments: _this.props.initialComments,
				page: 1,
				hasMore: true,
				loadingMore: false
			}, _this.loadMoreClicked = function (evt) {
				var nextPage = _this.state.page + 1;
				_this.setState({
					page: nextPage,
					loadingMore: true
				});

				var url = evt.target.href;
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url, true);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function () {
					var data = JSON.parse(xhr.responseText);
					_this.setState({
						comments: _this.state.comments.concat(data.comments),
						hasMore: data.hasMore,
						loadingMore: false
					});
				};
				xhr.send();
				evt.preventDefault();
			}, _this.renderMoreLink = function () {
				if (_this.state.loadingMore) {
					return React.createElement(
						'em',
						null,
						'Loading...'
					);
				} else if (_this.state.hasMore) {
					return React.createElement(
						'a',
						{ href: 'comments/page-' + (_this.state.page + 1), onClick: _this.loadMoreClicked },
						'Load More'
					);
				} else {
					return React.createElement(
						'em',
						null,
						'No more comments'
					);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(CommentsBox, [{
			key: 'render',
			value: function render() {
				var commentNodes = this.state.comments.map(function (comment) {
					return React.createElement(
						Comment,
						{ author: comment.Author },
						comment.Text
					);
				});

				return React.createElement(
					'div',
					{ className: 'comments' },
					React.createElement(
						'h1',
						null,
						'Comments'
					),
					React.createElement(
						'ol',
						{ className: 'commentList' },
						commentNodes
					),
					this.renderMoreLink()
				);
			}
		}]);

		return CommentsBox;
	}(React.Component);

	CommentsBox.propTypes = {
		initialComments: PropTypes.array.isRequired
	};


	module.exports = CommentsBox;

/***/ })
/******/ ]);