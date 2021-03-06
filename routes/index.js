(function(){
  "use strict";

  var Routes = {
    Root: require("./Root.js"),
    Signup: require("./Signup.js"),
    Login: require("./Login.js"),
    AdminShow: require("./AdminShow.js"),
    AdminEpisode: require("./AdminEpisode.js"),
    Show: require("./Show.js"),
    Shows: require("./Shows.js"),
    ShowInfo: require("./ShowInfo.js"),
    WikipediaMerge: require("./WikipediaMerge.js"),
    Authorize: require("./Authorize.js"),
    FilterTweets: require("./FilterTweets.js")
  };

  // routes, function, mongo, conf, auth, methods
  var routeList = [
    ["/",       Routes.Root,   0, 0, 0,  ["get"         ]],
    ["/signup", Routes.Signup, 1, 1, -1, ["get", "post" ]],
    ["/login",  Routes.Login,  1, 1, 0,  ["get", "post" ]],
    ["/u/show", Routes.Show,   1, 0, 1,  ["get", "post", "put", "delete" ]],

    ["/d/show",      Routes.Shows,       1, 0, 0,  ["get" ]],
    ["/d/show/:id",  Routes.ShowInfo,    1, 0, 0,  ["get" ]],

    ["/a/show",              Routes.AdminShow,    1, 1, 2,  ["get", "post" ]],
    ["/a/show/:id/episode",  Routes.AdminEpisode, 1, 0, 2,  ["get", "post" ]],
    ["/a/wikipedia",         Routes.WikipediaMerge, 1, 0, 2,  ["post" ]],
    
    ["/authorize", Routes.Authorize,   1, 1, 0,  ["get", "post"]],
    ["/filter",   Routes.FilterTweets, 1, 1, 1,  ["post"       ]]
  ];

  exports.routes = routeList;
}());
