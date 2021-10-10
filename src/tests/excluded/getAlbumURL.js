const rawGetalbum = {
	"responseContext": {
		"serviceTrackingParams": [
			{
				"service": "GFEEDBACK",
				"params": [
					{
						"key": "has_unlimited_entitlement",
						"value": "False"
					},
					{
						"key": "browse_id",
						"value": "MPREb_REsMMqBZjZB"
					},
					{
						"key": "logged_in",
						"value": "0"
					},
					{
						"key": "country-type",
						"value": "B"
					},
					{
						"key": "e",
						"value": "23918597,23983296,23944779,24057238,24007790,23744176,24016284,23934970,24028143,24050503,24049820,23996830,23968386,24086258,24080738,24002022,24004644,24079211,24036948,24001373,23882685,23998056,23974595,24007246,24084071,24077266,24060921,24053866,24037794,23804281,23946420,24069651,23884386,23966208,23857949,24087224,24090769,1714256,23748146,24082662,24002025,24056274"
					}
				]
			},
			{
				"service": "CSI",
				"params": [
					{
						"key": "c",
						"value": "WEB_REMIX"
					},
					{
						"key": "cver",
						"value": "1.20210816.00.01"
					},
					{
						"key": "yt_li",
						"value": "0"
					},
					{
						"key": "GetBrowseAlbumDetailPage_rid",
						"value": "0xbe574fd551a98226"
					}
				]
			},
			{
				"service": "ECATCHER",
				"params": [
					{
						"key": "client.version",
						"value": "1.20000101"
					},
					{
						"key": "client.name",
						"value": "WEB_REMIX"
					}
				]
			}
		]
	},
	"trackingParams": "CAAQhGciEwi2056FgcfyAhVXzXMBHZRAAmA=",
	"contents": {
		"singleColumnBrowseResultsRenderer": {
			"tabs": [
				{
					"tabRenderer": {
						"content": {
							"sectionListRenderer": {
								"contents": [
									{
										"musicDataBoundSectionRenderer": {
											"section": {
												"musicDataBoundAlbumReleaseTracksShelfRenderer": {
													"entityReference": {
														"musicAlbumReleaseEntity": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D"
													},
													"shelfMold": {
														"musicShelfRenderer": {
															"trackingParams": "CCsQ-V4iEwi2056FgcfyAhVXzXMBHZRAAmA=",
															"isEmptyShelfVisible": false
														}
													},
													"itemMold": {
														"musicListItemRenderer": {
															"listIndexStyle": "LIST_INDEX_STYLE_SHOW",
															"thumbnailStyle": "THUMBNAIL_STYLE_HIDE_THUMBNAIL",
															"menu": {
																"musicDataBoundMenuRenderer": {
																	"menuRendererMold": {
																		"menuRenderer": {
																			"trackingParams": "CB4Qui8iEwi2056FgcfyAhVXzXMBHZRAAmA=",
																			"openImmediately": false
																		}
																	},
																	"dataBoundMenuItems": [
																		{
																			"menuItemRendererMold": {
																				"menuNavigationItemRenderer": {
																					"text": {
																						"runs": [
																							{
																								"text": "Start radio"
																							}
																						]
																					},
																					"icon": {
																						"iconType": "MIX"
																					},
																					"trackingParams": "CCoQm_MFIhMIttOehYHH8gIVV81zAR2UQAJg"
																				}
																			},
																			"endpointMold": {
																				"watchEndpoint": {
																					"continuePlayback": true
																				}
																			}
																		},
																		{
																			"menuItemRendererMold": {
																				"menuServiceItemRenderer": {
																					"text": {
																						"runs": [
																							{
																								"text": "Play next"
																							}
																						]
																					},
																					"icon": {
																						"iconType": "QUEUE_PLAY_NEXT"
																					},
																					"trackingParams": "CCkQvu4FIhMIttOehYHH8gIVV81zAR2UQAJg"
																				}
																			},
																			"endpointMold": {
																				"queueAddEndpoint": {
																					"queueInsertPosition": "INSERT_AFTER_CURRENT_VIDEO",
																					"commands": [
																						{
																							"clickTrackingParams": "CB4Qui8iEwi2056FgcfyAhVXzXMBHZRAAmA=",
																							"addToToastAction": {
																								"item": {
																									"notificationTextRenderer": {
																										"successResponseText": {
																											"runs": [
																												{
																													"text": "Song will play next"
																												}
																											]
																										},
																										"trackingParams": "CCgQyscDIhMIttOehYHH8gIVV81zAR2UQAJg"
																									}
																								}
																							}
																						}
																					]
																				}
																			}
																		},
																		{
																			"menuItemRendererMold": {
																				"menuServiceItemRenderer": {
																					"text": {
																						"runs": [
																							{
																								"text": "Add to queue"
																							}
																						]
																					},
																					"icon": {
																						"iconType": "ADD_TO_REMOTE_QUEUE"
																					},
																					"trackingParams": "CCcQ--8FIhMIttOehYHH8gIVV81zAR2UQAJg"
																				}
																			},
																			"endpointMold": {
																				"queueAddEndpoint": {
																					"queueInsertPosition": "INSERT_AT_END",
																					"commands": [
																						{
																							"clickTrackingParams": "CB4Qui8iEwi2056FgcfyAhVXzXMBHZRAAmA=",
																							"addToToastAction": {
																								"item": {
																									"notificationTextRenderer": {
																										"successResponseText": {
																											"runs": [
																												{
																													"text": "Song added to queue"
																												}
																											]
																										},
																										"trackingParams": "CCYQyscDIhMIttOehYHH8gIVV81zAR2UQAJg"
																									}
																								}
																							}
																						}
																					]
																				}
																			}
																		},
																		{
																			"menuItemRendererMold": {
																				"menuNavigationItemRenderer": {
																					"text": {
																						"runs": [
																							{
																								"text": "Add to playlist"
																							}
																						]
																					},
																					"icon": {
																						"iconType": "ADD_TO_PLAYLIST"
																					},
																					"trackingParams": "CCUQw5QGIhMIttOehYHH8gIVV81zAR2UQAJg"
																				}
																			},
																			"endpointMold": {
																				"modalEndpoint": {
																					"modal": {
																						"modalWithTitleAndButtonRenderer": {
																							"title": {
																								"runs": [
																									{
																										"text": "Save this for later"
																									}
																								]
																							},
																							"content": {
																								"runs": [
																									{
																										"text": "Make playlists and share them after signing in"
																									}
																								]
																							},
																							"button": {
																								"buttonRenderer": {
																									"style": "STYLE_BLUE_TEXT",
																									"isDisabled": false,
																									"text": {
																										"runs": [
																											{
																												"text": "Sign in"
																											}
																										]
																									},
																									"navigationEndpoint": {
																										"clickTrackingParams": "CCQQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																										"signInEndpoint": {
																											"hack": true
																										}
																									},
																									"trackingParams": "CCQQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		{
																			"menuItemRendererMold": {
																				"menuNavigationItemRenderer": {
																					"text": {
																						"runs": [
																							{
																								"text": "Share"
																							}
																						]
																					},
																					"icon": {
																						"iconType": "SHARE"
																					},
																					"trackingParams": "CCMQkfsFIhMIttOehYHH8gIVV81zAR2UQAJg"
																				}
																			},
																			"endpointMold": {
																				"shareEntityEndpoint": {
																					"hack": true
																				}
																			}
																		}
																	],
																	"dataBoundTopLevelMenuButtons": [
																		{
																			"menuTopLevelItemRendererMold": {
																				"likeButtonRenderer": {
																					"trackingParams": "CCAQpUEiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																					"dislikeNavigationEndpoint": {
																						"clickTrackingParams": "CCAQpUEiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																						"modalEndpoint": {
																							"modal": {
																								"modalWithTitleAndButtonRenderer": {
																									"title": {
																										"runs": [
																											{
																												"text": "Not a fan?"
																											}
																										]
																									},
																									"content": {
																										"runs": [
																											{
																												"text": "Improve your recommendations after signing in"
																											}
																										]
																									},
																									"button": {
																										"buttonRenderer": {
																											"style": "STYLE_BLUE_TEXT",
																											"isDisabled": false,
																											"text": {
																												"runs": [
																													{
																														"text": "Sign in"
																													}
																												]
																											},
																											"navigationEndpoint": {
																												"clickTrackingParams": "CCIQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																												"signInEndpoint": {
																													"hack": true
																												}
																											},
																											"trackingParams": "CCIQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
																										}
																									}
																								}
																							}
																						}
																					},
																					"likeCommand": {
																						"clickTrackingParams": "CCAQpUEiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																						"modalEndpoint": {
																							"modal": {
																								"modalWithTitleAndButtonRenderer": {
																									"title": {
																										"runs": [
																											{
																												"text": "Like this song"
																											}
																										]
																									},
																									"content": {
																										"runs": [
																											{
																												"text": "Improve recommendations and save music after signing in"
																											}
																										]
																									},
																									"button": {
																										"buttonRenderer": {
																											"style": "STYLE_BLUE_TEXT",
																											"isDisabled": false,
																											"text": {
																												"runs": [
																													{
																														"text": "Sign in"
																													}
																												]
																											},
																											"navigationEndpoint": {
																												"clickTrackingParams": "CCEQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																												"signInEndpoint": {
																													"hack": true
																												}
																											},
																											"trackingParams": "CCEQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	]
																}
															},
															"hack": true,
															"overlay": {
																"musicItemThumbnailOverlayRenderer": {
																	"background": {
																		"verticalGradient": {
																			"gradientLayerColors": [
																				"0",
																				"0"
																			]
																		}
																	},
																	"content": {
																		"musicPlayButtonRenderer": {
																			"trackingParams": "CB8QyN4CIhMIttOehYHH8gIVV81zAR2UQAJg",
																			"playIcon": {
																				"iconType": "PLAY_ARROW"
																			},
																			"pauseIcon": {
																				"iconType": "PAUSE"
																			},
																			"iconColor": 4294967295,
																			"backgroundColor": 0,
																			"activeBackgroundColor": 0,
																			"loadingIndicatorColor": 4294901760,
																			"playingIcon": {
																				"iconType": "VOLUME_UP"
																			},
																			"iconLoadingColor": 0,
																			"activeScaleFactor": 1,
																			"buttonSize": "MUSIC_PLAY_BUTTON_SIZE_SMALL",
																			"accessibilityPlayData": {
																				"accessibilityData": {
																					"label": "Play"
																				}
																			},
																			"accessibilityPauseData": {
																				"accessibilityData": {
																					"label": "Pause"
																				}
																			}
																		}
																	},
																	"contentPosition": "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED",
																	"displayStyle": "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT"
																}
															}
														}
													}
												}
											}
										}
									}
								],
								"trackingParams": "CB4Qui8iEwi2056FgcfyAhVXzXMBHZRAAmA="
							}
						},
						"trackingParams": "CB0Q8JMBGAAiEwi2056FgcfyAhVXzXMBHZRAAmA="
					}
				}
			]
		}
	},
	"header": {
		"musicDataBoundHeaderRenderer": {
			"entityReference": {
				"musicAlbumReleaseEntity": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D"
			},
			"albumReleaseArtistMold": {
				"musicDataBoundAlbumReleaseArtistRenderer": {
					"hack": true
				}
			},
			"descriptionMold": {
				"musicDataBoundEntityDescriptionRenderer": {
					"descriptionShelfMold": {
						"musicShelfRenderer": {
							"trackingParams": "CBwQ-V4iEwi2056FgcfyAhVXzXMBHZRAAmA=",
							"isEmptyShelfVisible": false
						}
					}
				}
			},
			"detailsBarMenuMold": {
				"musicDataBoundMenuRenderer": {
					"menuRendererMold": {
						"menuRenderer": {
							"trackingParams": "CAAQhGciEwi2056FgcfyAhVXzXMBHZRAAmA=",
							"openImmediately": false
						}
					},
					"dataBoundMenuItems": [
						{
							"menuItemRendererMold": {
								"menuNavigationItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Shuffle play"
											}
										]
									},
									"icon": {
										"iconType": "MUSIC_SHUFFLE"
									},
									"trackingParams": "CAAQhGciEwi2056FgcfyAhVXzXMBHZRAAmA="
								}
							},
							"endpointMold": {
								"watchPlaylistEndpoint": {
									"params": "wAEB8gECKAE%3D"
								}
							}
						},
						{
							"menuItemRendererMold": {
								"menuNavigationItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Start radio"
											}
										]
									},
									"icon": {
										"iconType": "MIX"
									},
									"trackingParams": "CBsQm_MFIhMIttOehYHH8gIVV81zAR2UQAJg"
								}
							},
							"endpointMold": {
								"watchEndpointRadio": {
									"continuePlayback": true
								}
							}
						},
						{
							"menuItemRendererMold": {
								"menuServiceItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Play next"
											}
										]
									},
									"icon": {
										"iconType": "QUEUE_PLAY_NEXT"
									},
									"trackingParams": "CBoQvu4FIhMIttOehYHH8gIVV81zAR2UQAJg"
								}
							},
							"endpointMold": {
								"queueAddEndpoint": {
									"queueInsertPosition": "INSERT_AFTER_CURRENT_VIDEO",
									"commands": [
										{
											"clickTrackingParams": "CAAQhGciEwi2056FgcfyAhVXzXMBHZRAAmA=",
											"addToToastAction": {
												"item": {
													"notificationTextRenderer": {
														"successResponseText": {
															"runs": [
																{
																	"text": "Album will play next"
																}
															]
														},
														"trackingParams": "CBkQyscDIhMIttOehYHH8gIVV81zAR2UQAJg"
													}
												}
											}
										}
									]
								}
							}
						},
						{
							"menuItemRendererMold": {
								"menuServiceItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Add to queue"
											}
										]
									},
									"icon": {
										"iconType": "ADD_TO_REMOTE_QUEUE"
									},
									"trackingParams": "CBgQ--8FIhMIttOehYHH8gIVV81zAR2UQAJg"
								}
							},
							"endpointMold": {
								"queueAddEndpoint": {
									"queueInsertPosition": "INSERT_AT_END",
									"commands": [
										{
											"clickTrackingParams": "CAAQhGciEwi2056FgcfyAhVXzXMBHZRAAmA=",
											"addToToastAction": {
												"item": {
													"notificationTextRenderer": {
														"successResponseText": {
															"runs": [
																{
																	"text": "Album added to queue"
																}
															]
														},
														"trackingParams": "CBcQyscDIhMIttOehYHH8gIVV81zAR2UQAJg"
													}
												}
											}
										}
									]
								}
							}
						},
						{
							"menuItemRendererMold": {
								"menuNavigationItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Add to playlist"
											}
										]
									},
									"icon": {
										"iconType": "ADD_TO_PLAYLIST"
									},
									"trackingParams": "CBYQw5QGIhMIttOehYHH8gIVV81zAR2UQAJg"
								}
							},
							"endpointMold": {
								"modalEndpoint": {
									"modal": {
										"modalWithTitleAndButtonRenderer": {
											"title": {
												"runs": [
													{
														"text": "Save this for later"
													}
												]
											},
											"content": {
												"runs": [
													{
														"text": "Make playlists and share them after signing in"
													}
												]
											},
											"button": {
												"buttonRenderer": {
													"style": "STYLE_BLUE_TEXT",
													"isDisabled": false,
													"text": {
														"runs": [
															{
																"text": "Sign in"
															}
														]
													},
													"navigationEndpoint": {
														"clickTrackingParams": "CBUQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
														"signInEndpoint": {
															"hack": true
														}
													},
													"trackingParams": "CBUQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
												}
											}
										}
									}
								}
							}
						},
						{
							"menuItemRendererMold": {
								"menuNavigationItemRenderer": {
									"text": {
										"runs": [
											{
												"text": "Share"
											}
										]
									},
									"icon": {
										"iconType": "SHARE"
									},
									"trackingParams": "CBQQkfsFIhMIttOehYHH8gIVV81zAR2UQAJg"
								}
							},
							"endpointMold": {
								"shareEntityEndpoint": {
									"hack": true
								}
							}
						}
					],
					"dataBoundTopLevelMenuButtons": [
						{
							"menuTopLevelItemRendererMold": {
								"buttonRenderer": {
									"size": "SIZE_DEFAULT",
									"isDisabled": false,
									"text": {
										"runs": [
											{
												"text": "Play"
											}
										]
									},
									"icon": {
										"iconType": "PLAY_ARROW"
									},
									"accessibility": {
										"label": "PLAY ALL"
									},
									"trackingParams": "CBMQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
									"accessibilityData": {
										"accessibilityData": {
											"label": "PLAY ALL"
										}
									}
								}
							},
							"endpointMold": {
								"watchPlaylistEndpoint": {
									"hack": true
								}
							}
						},
						{
							"menuTopLevelItemRendererMold": {
								"musicTopLevelMenuItemConditionalRenderer": {
									"selectors": [
										{
											"condition": {
												"albumReleaseCondition": {
													"albumReleaseIsLiked": "MUSIC_BOOLEAN_CONDITION_FALSE"
												}
											},
											"resultTemplateRenderer": {
												"buttonRenderer": {
													"text": {
														"runs": [
															{
																"text": "Add to library"
															}
														],
														"accessibility": {
															"accessibilityData": {
																"label": "Add to library"
															}
														}
													},
													"serviceEndpoint": {
														"clickTrackingParams": "CBIQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
														"likeEndpoint": {
															"actions": [
																{
																	"clickTrackingParams": "CBIQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																	"musicLibraryStatusUpdateCommand": {
																		"libraryStatus": "MUSIC_LIBRARY_STATUS_HIDE"
																	}
																}
															]
														}
													},
													"icon": {
														"iconType": "LIBRARY_ADD"
													},
													"accessibility": {
														"label": "Add to library"
													},
													"trackingParams": "CBIQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
												}
											}
										},
										{
											"condition": {
												"albumReleaseCondition": {
													"albumReleaseIsLiked": "MUSIC_BOOLEAN_CONDITION_TRUE"
												}
											},
											"resultTemplateRenderer": {
												"buttonRenderer": {
													"text": {
														"runs": [
															{
																"text": "Remove from library"
															}
														],
														"accessibility": {
															"accessibilityData": {
																"label": "Remove from library"
															}
														}
													},
													"serviceEndpoint": {
														"clickTrackingParams": "CBEQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
														"likeEndpoint": {
															"actions": [
																{
																	"clickTrackingParams": "CBEQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
																	"musicLibraryStatusUpdateCommand": {
																		"libraryStatus": "MUSIC_LIBRARY_STATUS_NOT_IN_LIBRARY"
																	}
																}
															]
														}
													},
													"icon": {
														"iconType": "LIBRARY_REMOVE"
													},
													"accessibility": {
														"label": "Remove from library"
													},
													"trackingParams": "CBEQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
												}
											}
										}
									]
								}
							},
							"endpointMold": {
								"modalEndpoint": {
									"modal": {
										"modalWithTitleAndButtonRenderer": {
											"title": {
												"runs": [
													{
														"text": "Save this for later"
													}
												]
											},
											"content": {
												"runs": [
													{
														"text": "Add favorites to your library after signing in"
													}
												]
											},
											"button": {
												"buttonRenderer": {
													"style": "STYLE_BLUE_TEXT",
													"isDisabled": false,
													"text": {
														"runs": [
															{
																"text": "Sign in"
															}
														]
													},
													"navigationEndpoint": {
														"clickTrackingParams": "CBAQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA=",
														"signInEndpoint": {
															"hack": true
														}
													},
													"trackingParams": "CBAQ8FsiEwi2056FgcfyAhVXzXMBHZRAAmA="
												}
											}
										}
									}
								}
							}
						}
					]
				}
			},
			"moreButton": {
				"toggleButtonRenderer": {
					"isToggled": false,
					"isDisabled": false,
					"defaultIcon": {
						"iconType": "EXPAND"
					},
					"defaultText": {
						"runs": [
							{
								"text": "More"
							}
						]
					},
					"toggledIcon": {
						"iconType": "COLLAPSE"
					},
					"toggledText": {
						"runs": [
							{
								"text": "Less"
							}
						]
					},
					"trackingParams": "CA8QmE0iEwi2056FgcfyAhVXzXMBHZRAAmA="
				}
			}
		}
	},
	"frameworkUpdates": {
		"entityBatchUpdate": {
			"mutations": [
				{
					"entityKey": "Eg1iX1JFc01NcUJaalpCIBMoAQ%3D%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicAlbumReleaseUserDetail": {
							"id": "Eg1iX1JFc01NcUJaalpCIBMoAQ%3D%3D",
							"inLibrary": false,
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicArtist": {
							"id": "EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB",
							"name": "TWICE",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/VCtDsa-50sogf45Gm1rybFxvdt8kBVsgLBwBj15zycm7G-ei1okTVaLmyuWElviitwLFWE3D2z1nQQ=w60-h60-p-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/VCtDsa-50sogf45Gm1rybFxvdt8kBVsgLBwBj15zycm7G-ei1okTVaLmyuWElviitwLFWE3D2z1nQQ=w120-h120-p-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/VCtDsa-50sogf45Gm1rybFxvdt8kBVsgLBwBj15zycm7G-ei1okTVaLmyuWElviitwLFWE3D2z1nQQ=w226-h226-p-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/VCtDsa-50sogf45Gm1rybFxvdt8kBVsgLBwBj15zycm7G-ei1okTVaLmyuWElviitwLFWE3D2z1nQQ=w544-h544-p-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"externalChannelId": "UCAq0pFGa2w9SjxOq0ZxKVIw"
						}
					}
				},
				{
					"entityKey": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAeKAE%3D",
							"parentTrack": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgszZC1ENWJMRFpTayBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgszZC1ENWJMRFpTayBkKAE%3D",
							"serializedShareEntity": "CgszZC1ENWJMRFpTaw%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAcKAE%3D",
							"title": "I CAN'T STOP ME",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "CM4CkVFmTds",
							"videoModeVersion": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAcKAE%3D",
							"userDetails": "EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "1",
							"lengthMs": "206000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgszZC1ENWJMRFpTayBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CA4QodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAeKAE%3D",
							"parentTrack": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgswTzE4R25UVzFDVSBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgswTzE4R25UVzFDVSBkKAE%3D",
							"serializedShareEntity": "CgswTzE4R25UVzFDVQ%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAcKAE%3D",
							"title": "HELL IN HEAVEN",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "0O18GnTW1CU",
							"audioModeVersion": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAcKAE%3D",
							"userDetails": "EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "2",
							"lengthMs": "180000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgswTzE4R25UVzFDVSBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CA0QodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAeKAE%3D",
							"parentTrack": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtRZ3lsejFwTEZFMCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtRZ3lsejFwTEZFMCBkKAE%3D",
							"serializedShareEntity": "CgtRZ3lsejFwTEZFMA%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAcKAE%3D",
							"title": "UP NO MORE",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "Qgylz1pLFE0",
							"audioModeVersion": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAcKAE%3D",
							"userDetails": "EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "3",
							"lengthMs": "215000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtRZ3lsejFwTEZFMCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAwQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAeKAE%3D",
							"parentTrack": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtadzJTZ0pYV1AtNCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtadzJTZ0pYV1AtNCBkKAE%3D",
							"serializedShareEntity": "CgtadzJTZ0pYV1AtNA%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAcKAE%3D",
							"title": "DO WHAT WE LIKE",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "Zw2SgJXWP-4",
							"audioModeVersion": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAcKAE%3D",
							"userDetails": "EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "4",
							"lengthMs": "180000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtadzJTZ0pYV1AtNCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAsQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAeKAE%3D",
							"parentTrack": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtwRzFKTmR0Tk5NTSBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtwRzFKTmR0Tk5NTSBkKAE%3D",
							"serializedShareEntity": "CgtwRzFKTmR0Tk5NTQ%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAcKAE%3D",
							"title": "BRING IT BACK",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "pG1JNdtNNMM",
							"audioModeVersion": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAcKAE%3D",
							"userDetails": "EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "5",
							"lengthMs": "209000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtwRzFKTmR0Tk5NTSBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAoQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAeKAE%3D",
							"parentTrack": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtVRC1OcnlWZER0cyBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtVRC1OcnlWZER0cyBkKAE%3D",
							"serializedShareEntity": "CgtVRC1OcnlWZER0cw%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAcKAE%3D",
							"title": "BELIEVER",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "UD-NryVdDts",
							"audioModeVersion": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAcKAE%3D",
							"userDetails": "EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "6",
							"lengthMs": "197000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtVRC1OcnlWZER0cyBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAkQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAeKAE%3D",
							"parentTrack": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgsyMUJKYV9MQTlXNCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgsyMUJKYV9MQTlXNCBkKAE%3D",
							"serializedShareEntity": "CgsyMUJKYV9MQTlXNA%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAcKAE%3D",
							"title": "QUEEN",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "21BJa_LA9W4",
							"audioModeVersion": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAcKAE%3D",
							"userDetails": "EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "7",
							"lengthMs": "194000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgsyMUJKYV9MQTlXNCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAgQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAeKAE%3D",
							"parentTrack": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtWU2M3NGZEZWo0SSBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtWU2M3NGZEZWo0SSBkKAE%3D",
							"serializedShareEntity": "CgtWU2M3NGZEZWo0SQ%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAcKAE%3D",
							"title": "GO HARD",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "VSc74fDej4I",
							"audioModeVersion": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAcKAE%3D",
							"userDetails": "EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "8",
							"lengthMs": "182000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtWU2M3NGZEZWo0SSBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAcQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAeKAE%3D",
							"parentTrack": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "Egt1ank4b0Z3eFJGNCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "Egt1ank4b0Z3eFJGNCBkKAE%3D",
							"serializedShareEntity": "Cgt1ank4b0Z3eFJGNA%3D%3D"
						}
					}
				},
				{
					"entityKey": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAcKAE%3D",
							"title": "SHOT CLOCK",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "ujy8oFwxRF4",
							"audioModeVersion": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAcKAE%3D",
							"userDetails": "Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "9",
							"lengthMs": "210000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "Egt1ank4b0Z3eFJGNCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAYQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAeKAE%3D",
							"parentTrack": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtuTlRadzh5dk1uOCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtuTlRadzh5dk1uOCBkKAE%3D",
							"serializedShareEntity": "CgtuTlRadzh5dk1uOA%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAcKAE%3D",
							"title": "HANDLE IT",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "nNTZw8yvMn8",
							"audioModeVersion": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAcKAE%3D",
							"userDetails": "EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "10",
							"lengthMs": "172000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtuTlRadzh5dk1uOCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAUQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAeKAE%3D",
							"parentTrack": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtpZm5MR1lRU3JfNCBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtpZm5MR1lRU3JfNCBkKAE%3D",
							"serializedShareEntity": "CgtpZm5MR1lRU3JfNA%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAcKAE%3D",
							"title": "DEPEND ON YOU",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "Jj9vsP4HWwg",
							"videoModeVersion": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAcKAE%3D",
							"userDetails": "EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "11",
							"lengthMs": "199000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtpZm5MR1lRU3JfNCBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAQQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAeKAE%3D",
							"parentTrack": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtvaVZxYVp5WTB0cyBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtvaVZxYVp5WTB0cyBkKAE%3D",
							"serializedShareEntity": "CgtvaVZxYVp5WTB0cw%3D%3D"
						}
					}
				},
				{
					"entityKey": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAcKAE%3D",
							"title": "SAY SOMETHING",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "UY3N52CrTPE",
							"videoModeVersion": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAcKAE%3D",
							"userDetails": "EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "12",
							"lengthMs": "248000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtvaVZxYVp5WTB0cyBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAMQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAeKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrackUserDetail": {
							"id": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAeKAE%3D",
							"parentTrack": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAcKAE%3D",
							"likeState": "MUSIC_ENTITY_LIKE_STATE_UNKNOWN"
						}
					}
				},
				{
					"entityKey": "EgtPTXVwa1RWZlNRYyBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EgtPTXVwa1RWZlNRYyBkKAE%3D",
							"serializedShareEntity": "CgtPTXVwa1RWZlNRYw%3D%3D"
						}
					}
				},
				{
					"entityKey": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAcKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicTrack": {
							"id": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAcKAE%3D",
							"title": "BEHIND THE MASK",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"artists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"artistNames": "TWICE",
							"videoId": "xQVowR4myeU",
							"videoModeVersion": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAcKAE%3D",
							"userDetails": "Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAeKAE%3D",
							"albumRelease": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"albumTrackIndex": "13",
							"lengthMs": "219000",
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"share": "EgtPTXVwa1RWZlNRYyBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAIQodUCIhMIttOehYHH8gIVV81zAR2UQAJgmgEEEMLYAg=="
							}
						}
					}
				},
				{
					"entityKey": "Eg1iX1JFc01NcUJaalpCIBIoAQ%3D%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicAlbumReleaseDetail": {
							"id": "Eg1iX1JFc01NcUJaalpCIBIoAQ%3D%3D",
							"description": "Eyes Wide Open is the second Korean studio album by South Korean girl group Twice. It was released on October 26, 2020, by JYP Entertainment and Republic Records. It is the group's first Korean full-length album in nearly three years, following Twicetagram. The group's sophomore album features thirteen songs including the lead single, \"I Can't Stop Me\", and was released on the week of their fifth anniversary.\nPrimarily a pop record with elements of retro-synth, dance-pop, Japanese city-pop, and contemporary R&B genres among others. Production of the album was handled by a wide array of producers including Melanie Fontana, Josh Record, LDN Noise, DJ Swivel, and Dua Lipa, with JYP Entertainment founder J. Y. Park serving as the album's executive producer. Members of the group participated in the production as songwriters for six out of thirteen tracks on the album. Lyrically, the album discusses themes of love, insomnia, self-confidence, self-encouragement, anxiety, and more.\nThe album received both commercial success and generally favorable reviews from music critics, who complimented the wide variety of music genres featured in the album as well as the group's musical growth.",
							"tracks": [
								"EhdDTTRDa1ZGbVRkc3wzZC1ENWJMRFpTayAcKAE%3D",
								"EhcwTzE4R25UVzFDVXwwTzE4R25UVzFDVSAcKAE%3D",
								"EhdRZ3lsejFwTEZFMHxRZ3lsejFwTEZFMCAcKAE%3D",
								"EhdadzJTZ0pYV1AtNHxadzJTZ0pYV1AtNCAcKAE%3D",
								"EhdwRzFKTmR0Tk5NTXxwRzFKTmR0Tk5NTSAcKAE%3D",
								"EhdVRC1OcnlWZER0c3xVRC1OcnlWZER0cyAcKAE%3D",
								"EhcyMUJKYV9MQTlXNHwyMUJKYV9MQTlXNCAcKAE%3D",
								"EhdWU2M3NGZEZWo0SXxWU2M3NGZEZWo0SSAcKAE%3D",
								"Ehd1ank4b0Z3eFJGNHx1ank4b0Z3eFJGNCAcKAE%3D",
								"EhduTlRadzh5dk1uOHxuTlRadzh5dk1uOCAcKAE%3D",
								"EhdKajl2c1A0SFd3Z3xpZm5MR1lRU3JfNCAcKAE%3D",
								"EhdVWTNONTJDclRQRXxvaVZxYVp5WTB0cyAcKAE%3D",
								"Ehd4UVZvd1I0bXllVXxPTXVwa1RWZlNRYyAcKAE%3D"
							]
						}
					}
				},
				{
					"entityKey": "EilPTEFLNXV5X2xPU1N1bFBobERvejdsMGtVQkI4M3o4QXM3OU5TNkdrQSBkKAE%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicShare": {
							"id": "EilPTEFLNXV5X2xPU1N1bFBobERvejdsMGtVQkI4M3o4QXM3OU5TNkdrQSBkKAE%3D",
							"serializedShareEntity": "EilPTEFLNXV5X2xPU1N1bFBobERvejdsMGtVQkI4M3o4QXM3OU5TNkdrQQ%3D%3D"
						}
					}
				},
				{
					"entityKey": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
					"type": "ENTITY_MUTATION_TYPE_REPLACE",
					"payload": {
						"musicAlbumRelease": {
							"id": "Eg1iX1JFc01NcUJaalpCIBEoAQ%3D%3D",
							"title": "Eyes wide open",
							"thumbnailDetails": {
								"thumbnails": [
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w60-h60-l90-rj",
										"width": 60,
										"height": 60
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w120-h120-l90-rj",
										"width": 120,
										"height": 120
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w226-h226-l90-rj",
										"width": 226,
										"height": 226
									},
									{
										"url": "https://lh3.googleusercontent.com/lhQnqdU_0lhyPbM5f3wWp_jEs2_46A_d1_baovMrWdAc2BS-QIaplee_fTTXJ--0YCvCZNTDXqfDeQ7d=w544-h544-l90-rj",
										"width": 544,
										"height": 544
									}
								]
							},
							"primaryArtists": [
								"EhhVQ0FxMHBGR2EydzlTanhPcTBaeEtWSXcgFCgB"
							],
							"details": "Eg1iX1JFc01NcUJaalpCIBIoAQ%3D%3D",
							"audioPlaylistId": "OLAK5uy_nGyCX4aNigDzsvNSRZ63NPiH75wef3lCw",
							"userDetails": "Eg1iX1JFc01NcUJaalpCIBMoAQ%3D%3D",
							"trackCount": "13",
							"artistDisplayName": "TWICE",
							"durationMs": "2611000",
							"releaseDate": {
								"year": 2020,
								"month": 10,
								"day": 26
							},
							"contentRating": {
								"explicitType": "MUSIC_ENTITY_EXPLICIT_TYPE_NOT_EXPLICIT"
							},
							"likeTargetPlaylistId": "OLAK5uy_nGyCX4aNigDzsvNSRZ63NPiH75wef3lCw",
							"releaseType": "MUSIC_RELEASE_TYPE_ALBUM",
							"radioPlaylistMixPlaylistId": "RDAMPLOLAK5uy_lOSSulPhlDoz7l0kUBB83z8As79NS6GkA",
							"radioAutomixPlaylistId": "RDAMPLOLAK5uy_lOSSulPhlDoz7l0kUBB83z8As79NS6GkA",
							"share": "EilPTEFLNXV5X2xPU1N1bFBobERvejdsMGtVQkI4M3o4QXM3OU5TNkdrQSBkKAE%3D",
							"loggingDirectives": {
								"trackingParams": "CAEQnNUCIhMIttOehYHH8gIVV81zAR2UQAJg"
							}
						}
					}
				}
			],
			"timestamp": {
				"seconds": "1629717029",
				"nanos": 955900771
			}
		}
	}
}
