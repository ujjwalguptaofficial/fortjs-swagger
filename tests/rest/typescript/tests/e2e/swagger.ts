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
    "tags": [
        {
            "description": "All operations related to user",
            "name": "User",
        },
    ],
    "components": {
        "schemas": {
            "Student": { "required": ["id"], "properties": { "id": { "type": "number" } } },
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
                    "wishList",
                    "address",
                    "emailId",
                    "gender",
                    "name",
                    "password",
                    "friends"
                ],
                "properties": {
                    "wishList": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "example": "india"
                        }
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
                    "password": {
                        "type": "string"
                    },
                    "friends": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Friend"
                        }
                    }
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
        "/": {
            "get": {
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*",
                ],
                "description": null,
                "operationId": "index",
                "parameters": [],
                "responses": {},
                "security": [
                    {
                        "": [],
                    },
                ],
                "summary": null,
                "tags": [
                    "*",
                ],
            },
        },
        "/anonymousbody": {
            "post": {
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*",
                ],
                "description": null,
                "operationId": "AnonymousBody",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "schema": {
                            "example": {
                                "id": "",
                                "name": "",
                            },
                            "type": "object",
                        },
                    },
                ],
                "responses": {
                    "200": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "example": {
                                        "data": {},
                                        "message": "",
                                        "status": "",
                                    },
                                    "type": "object",
                                },
                            },
                        },
                    },
                },
                "security": [
                    {
                        "": [],
                    },
                ],
                "summary": null,
                "tags": [
                    "*",
                ],
            },
        },
        "/modelbody": {
            "post": {
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*",
                ],
                "description": null,
                "operationId": "ModelBody",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/components/schemas/Student",
                        },
                    },
                ],
                "responses": {
                    "200": {
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "example": "works ok",
                                    "type": "string",
                                },
                            },
                        },
                    },
                },
                "security": [
                    {
                        "": [],
                    },
                ],
                "summary": null,
                "tags": [
                    "*",
                ],
            },
        },
        "/user": {
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
                    "User"
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
                    "User"
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
                    "User"
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
                    "User"
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
                    "User"
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
            },
        },
        "/user/apiwithoutresponse": {
            "get": {
                "operationId": "apiWithoutResponse",
                "consumes": [
                    "application/json",
                    "application/xml",
                    "text/html",
                    "text/plain",
                    "*/*"
                ],
                "parameters": [],
                "tags": [
                    "User"
                ],
                "responses": {},
                "summary": "an api without response",
                "description": null,
                "security": [
                    {
                        "basicAuth": []
                    }
                ]
            }
        }
    }
};