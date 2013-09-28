var nodeList = [
    {
        "nodeContent": "网页",
        "collapsed": "",
        "nodes": [
            {
                "nodeContent": "功能组件",
                "collapsed": "",
                "nodes": [
                    {
                        "nodeContent": "Scroll",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "模拟滚动条",
                                "collapsed": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "回到顶部",
                                "collapsed": "",
                                "nodes": []
                            },
                            {
                                nodeContent: "Fixed <div>" +
                                    "<a href='#' class='btn-add' style='color:#fff'>添加</a> | <a class='btn-del' style='color:#fff' href='#'>删除</a></div>",
                                collapsed: "",
                                eleStyle:"background:#5A3022;color:#fff;",
                                clientFn:function(node){
                                    var ele=node.nodeEle,
                                        newNode={
                                            "nodeContent": "node",
                                            "className": "",
                                            "nodes": []
                                        };
                                    $(ele).find(".btn-add").on("click",function(e){
                                        node.addNode(newNode);
                                        e.stopPropagation();
                                    });
                                    $(ele).find(".btn-del").on("click",function(e){
                                        node.remove();
                                        e.stopPropagation();
                                    });
                                },
                                nodes: []
                            }
                        ]
                    },
                    {
                        "nodeContent": "多媒体",
                        "collapsed": "",
                        "nodes": [
                            {
                                "nodeContent": "图片",
                                "collapsed": "",
                                eleStyle:"background:#f7f7f7 url('img/raspberry.jpg')",
                                "nodes": [
                                    {
                                        "nodeContent": "Slider",
                                        "collapsed": "",
                                        "nodes": [
                                            {
                                                "nodeContent": "2D切换",
                                                "collapsed": "",
                                                "nodes": []
                                            }, {
                                                "nodeContent": "3D切换",
                                                "collapsed": "",
                                                "nodes": []
                                            }
                                        ]
                                    },
                                    {
                                        "nodeContent": "图片编辑",
                                        "collapsed":true,
                                        "nodes": [
                                            {
                                                "nodeContent": "旋转",
                                                "collapsed": "",
                                                "nodes": []
                                            }, {
                                                "nodeContent": "剪裁",
                                                "style": "background:#fff",
                                                "nodes": []
                                            },
                                            {
                                                "nodeContent": "放大",
                                                "collapsed": "",
                                                "nodes": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeContent": "UI组件",
                "className": "",
                "nodes": [
                    {
                        "nodeContent": "业务组件",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "迷你登录框",
                                "className": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "爱分享",
                                "className": "",
                                "nodes": []
                            }
                        ]
                    },
                    {
                        "nodeContent": "BUtton",
                        "className": "",
                        "nodes": []
                    },
                    {
                        "nodeContent": "SelectBox",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "模拟下拉框",
                                "className": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "下拉联动",
                                "className": "",
                                "nodes": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];