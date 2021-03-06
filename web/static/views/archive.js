define(['jquery', 'underscore', 'backbone', 
        'views/pageview', 'views/article-list-item-view'],
function($, _, backbone, PageView, ArticleListItemView){
    'use strict';
    var Archive = PageView.extend({

        render: function(){
            var self = this;
            self.$(".article-container").html('');
            _.each(self.model.models, function(article){
                var articleListView = new ArticleListItemView({model: article});
                articleListView.render();
                articleListView.$el.find(".archive.btn").remove();
                self.$(".article-container").append(articleListView.$el)
            })
        }

    })
    return Archive;

});