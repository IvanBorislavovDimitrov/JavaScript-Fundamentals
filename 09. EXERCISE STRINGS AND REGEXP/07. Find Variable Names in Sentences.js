(text => text.match(/_([a-zA-Z0-9]+)/g).map(t => t.substr(1)).join(','));