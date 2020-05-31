"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearLoader=exports.render_loader=exports.elementsString=exports.elements=void 0;var elements={search_form:document.querySelector(".search"),search_input:document.querySelector(".search__field"),search_res_list:document.querySelector(".results__list"),search_parent:document.querySelector(".results")};exports.elements=elements;var elementsString={loader:"custom_loader"};exports.elementsString=elementsString;var render_loader=function(e){e.insertAdjacentHTML("afterbegin",'\n            <div class="custom_loader">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n                    <rect fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 3 50)">\n                    <animate\n                        attributeName="height"\n                        attributeType="XML"\n                        dur="1s"\n                        values="30; 100; 30"\n                        repeatCount="indefinite"/>\n                    </rect>\n                    <rect x="17" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 20 50)">\n                        <animate\n                            attributeName="height"\n                            attributeType="XML"\n                            dur="1s"\n                            values="30; 100; 30"\n                            repeatCount="indefinite"\n                            begin="0.1s"/>\n                    </rect>\n                    <rect x="40" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 40 50)">\n                        <animate\n                            attributeName="height"\n                            attributeType="XML"\n                            dur="1s"\n                            values="30; 100; 30"\n                            repeatCount="indefinite"\n                            begin="0.3s"/>\n                    </rect>\n                    <rect x="60" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 58 50)">\n                        <animate\n                            attributeName="height"\n                            attributeType="XML"\n                            dur="1s"\n                            values="30; 100; 30"\n                            repeatCount="indefinite"\n                            begin="0.5s"/>\n                    </rect>\n                    <rect x="80" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 76 50)">\n                        <animate\n                            attributeName="height"\n                            attributeType="XML"\n                            dur="1s"\n                            values="30; 100; 30"\n                            repeatCount="indefinite"\n                            begin="0.1s"/>\n                    </rect>\n                </svg>\n            </div>')};exports.render_loader=render_loader;var clearLoader=function(){var e=document.querySelector(".".concat(elementsString.loader));e&&e.parentNode.removeChild(e)};exports.clearLoader=clearLoader;