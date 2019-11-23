export const swaggerJson = {
    "openapi": "3.0.0",
    "info": {
        "title": "Swagger Test",
        "description": "Swagger Test",
        "version": "1.0"
    },
    "servers": [
        {
            "description": "local",
            "url": "http://localhost:4000"
        }
    ],
    "components": {
        "schemas": {
            "Friend": {
                "required": [
                    "id",
                    "name"
                ],
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "name": {
                        "type": "string"
                    }
                }
            },
            "User": {
                "required": [
                    "friends",
                    "wishList",
                    "address",
                    "emailId",
                    "gender",
                    "name"
                ],
                "properties": {
                    "friends": {
                        "items": {
                            "$ref": "#/components/schemas/Friend",
                        },
                        "type": "array",
                    },
                    "id": {
                        "type": "number"
                    },
                    "address": {
                        "type": "string"
                    },
                    "emailId": {
                        "type": "string"
                    },
                    "gender": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "wishList": {
                        "items": {
                            "example": "india",
                            "type": "string",
                        },
                        "type": "array",
                    },
                }
            }
        },
        "securitySchemes": {
            "basicAuth": {
                "type": "http",
                "scheme": "basic"
            }
        }
    },
    "paths": {
        "/user/": {
            "get": {
                "operationId": "getUsers",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [

                ],
                "tags": [
                    "user"
                ],
                "responses": {
                    "200": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    }
                },
                "summary": "get all users",
                "description": "return all saved users",
                "security": [
                    {
                        "basicAuth": [

                        ]
                    }
                ]
            },
            "post": {
                "operationId": "addUser",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/components/schemas/User"
                        },
                        "description": "User model"
                    }
                ],
                "tags": [
                    "user"
                ],
                "responses": {
                    "201": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    }
                },
                "summary": "Add user",
                "description": null,
                "security": [
                    {
                        "basicAuth": [

                        ]
                    }
                ]
            },
            "put": {
                "operationId": "updateUser",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [

                ],
                "tags": [
                    "user"
                ],
                "responses": {
                    "200": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "404": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "invalid user"
                                }
                            }
                        }
                    }
                },
                "summary": "Update user",
                "description": null,
                "security": [
                    {
                        "basicAuth": [

                        ]
                    }
                ]
            }
        },
        "/user/{id}": {
            "get": {
                "operationId": "getUser",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "schema": {
                            "type": "number",
                            "example": 1
                        },
                        "description": "user id"
                    }
                ],
                "tags": [
                    "user"
                ],
                "responses": {
                    "200": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "404": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "invalid user"
                                }
                            }
                        }
                    }
                },
                "summary": "get a single user by id",
                "description": null,
                "security": [
                    {
                        "basicAuth": [

                        ]
                    }
                ]
            },
            "delete": {
                "operationId": "removeUser",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [

                ],
                "tags": [
                    "user"
                ],
                "responses": {
                    "200": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "user deleted"
                                }
                            }
                        }
                    },
                    "404": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "invalid user"
                                }
                            }
                        }
                    }
                },
                "summary": "remove a single user by id",
                "description": null,
                "security": [
                    {
                        "basicAuth": [

                        ]
                    }
                ]
            }
        }
    }
};