window.JST = window.JST || {};
window.JST['channel_list'] = Handlebars.compile('LIST!\n');
window.JST['chat'] = Handlebars.compile('<h3>\n  {{#if session }}\n    {{ session.title }}\n  {{/if}}\n</h3>\n\n<ul id="chat_log">\n</ul>\n\n<div id="chat_message">\n  <input type="text" id="txtChat"></input><button type="submit" id="send" class="btn">Send</button>\n</div>\n');
window.JST['chatitem'] = Handlebars.compile('<li><strong>{{ model.user.username }}</strong>: {{ model.chat_line }}</li>\n');
window.JST['main_layout'] = Handlebars.compile('<div class="row-fluid">\n  <div class="span3">\n    <div id="session_list" class="well sidebar-nav">\n    </div><!--/.well -->\n  </div><!--/span-->\n  <div class="span9">\n    <div id="chat_window" class="hero-unit">\n      Select a session!\n    </div>\n  </div> <!-- /span -->\n</div>\n');
window.JST['session_list'] = Handlebars.compile('<ul class="nav nav-list">\n  <li class="nav-header">Sidebar</li>\n  {{#each collection }}\n  <li><a href="/chat/{{ this.pk }}">{{ this.title }}</a></li>\n  {{/each}}\n</ul>\n');
