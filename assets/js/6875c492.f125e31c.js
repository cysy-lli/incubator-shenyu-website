"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8610,6058],{6165:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(4926),s=a(6742),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,r.Z)(e,p),o=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(f,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(v.Z,{toc:a})))))}},3146:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),s=a(6742),c=a(3018),o=a(6845),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var f=function(e){var t,a,f,v=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,E=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=b.date,w=b.formattedDate,T=b.permalink,L=b.tags,y=b.readingTime,C=b.title,P=b.editUrl,M=E.author,I=E.image,x=E.keywords,R=E.author_url||E.authorURL,U=E.author_title||E.authorTitle,z=E.author_image_url||E.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:x,image:I}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},Z?C:r.createElement(s.Z,{to:T},C)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:k},w),y&&r.createElement(r.Fragment,null," \xb7 ",v(y))),r.createElement("div",{className:"avatar margin-vert--md"},z&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:R},r.createElement("img",{src:z,alt:M})),r.createElement("div",{className:"avatar__intro"},M&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:R},M)),r.createElement("small",{className:"avatar__subtitle"},U)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:o.Z},p)),(L.length>0||_)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[h]=Z,t))},L.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return r.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&P&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:P})),!Z&&_&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:b.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9404:function(e,t,a){a.r(t);var r=a(7294),n=a(6742),l=a(6165),i=a(3146),s=a(4973),c=a(3018);t.default=function(e){var t,a=e.metadata,o=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(l.Z,{title:f,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(4973),l=a(7462),i=a(3366),s=a(6010),c="iconEdit_2_ui",o=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return c},Z:function(){return o}});var r=a(7294),n=a(6010);var l=function(e,t,a){var n=(0,r.useState)(void 0),l=n[0],i=n[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var n=0,s=!1,c=document.getElementsByClassName(e);n<c.length&&!s;){var o=c[n],m=o.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),o.classList.add(t),i(o),s=!0),n+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),r.createElement("div",{className:(0,n.Z)(i,"thin-scrollbar")},r.createElement(c,{toc:t}))}},2086:function(e,t,a){var r=a(7462),n=a(3366),l=a(7294),i=["width","height"];t.Z=function(e){e.width,e.height;var t=(0,n.Z)(e,i);return l.createElement("svg",(0,r.Z)({t:"1631348384596",class:"icon",viewBox:"0 0 1024 1024",version:"1.1"},t,{"p-id":"557",width:"20",height:"20"}),l.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);