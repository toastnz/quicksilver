<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
<% base_tag %>
<% include Favicons %>

<% if $SiteConfig.GoogleTagManagerID %>
    <script>(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(), event: 'gtm.js'
        });
        var f                          = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async                        = true;
        j.src                          =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', '{$SiteConfig.GoogleTagManagerID}');</script>
<% end_if %>


<% with $SiteConfig %>
    <% if $EnableBugherd && $BHProjectKey %>
        <script type='text/javascript'>
            (function (d, t) {
                var bh  = d.createElement(t), s = d.getElementsByTagName(t)[0];
                bh.type = 'text/javascript';
                bh.src  = 'https://www.bugherd.com/sidebarv2.js?apikey={$BHProjectKey}';
                s.parentNode.insertBefore(bh, s);
            })(document, 'script');
        </script>
    <% end_if %>

    <% if $GoogleTrackingID %>
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                            (i[r].q = i[r].q || []).push(arguments)
                        }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src   = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', '{$GoogleTrackingID}', 'auto');
            ga('send', 'pageview');
        </script>
    <% end_if %>
<% end_with %>

<% require themedCSS("/dist/styles/style") %>
