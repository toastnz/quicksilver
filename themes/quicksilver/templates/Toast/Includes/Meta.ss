<%----------------------------------------------------------------
Meta
----------------------------------------------------------------%>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<%----------------------------------------------------------------
Base Tag
----------------------------------------------------------------%>

<% base_tag %>

<%----------------------------------------------------------------
Prefetch DNS for google fonts
----------------------------------------------------------------%>
<link rel='dns-prefetch' href='//fonts.googleapis.com'/>

<%----------------------------------------------------------------
Meta tags
----------------------------------------------------------------%>

$MetaTags('false')

<%----------------------------------------------------------------
Page Title
----------------------------------------------------------------%>

<title>{$Title} | {$SiteConfig.Title}</title>

<%----------------------------------------------------------------
Favicons Template
----------------------------------------------------------------%>

<% include Toast\Favicons %>


<%----------------------------------------------------------------
Google Tag manager
----------------------------------------------------------------%>

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

<%----------------------------------------------------------------
Bugherd
----------------------------------------------------------------%>


<% if $SiteConfig.EnableBugherd && $SiteConfig.BHProjectKey %>
    <script type='text/javascript'>
        (function (d, t) {
            var bh  = d.createElement(t), s = d.getElementsByTagName(t)[0];
            bh.type = 'text/javascript';
            bh.src  = 'https://www.bugherd.com/sidebarv2.js?apikey={$SiteConfig.BHProjectKey}';
            s.parentNode.insertBefore(bh, s);
        })(document, 'script');
    </script>
<% end_if %>

<%----------------------------------------------------------------
Google tracking
----------------------------------------------------------------%>

<% if $SiteConfig.GoogleTrackingID %>
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
        ga('create', '{$SiteConfig.GoogleTrackingID}', 'auto');
        ga('send', 'pageview');
    </script>
<% end_if %>


<%----------------------------------------------------------------
Styles
----------------------------------------------------------------%>

<% if $Live %>
    <meta property="faux:style" content="">
    <script>
        (function () {
            var head      = document.querySelector('meta[property="faux:style"]');
            var element   = document.createElement('link');
            element.rel   = 'stylesheet';
            element.type  = 'text/css';
            element.href  = '$Themedir/dist/styles/main.css';
            element.media = 'non-existant-media';
            head.appendChild(element, head.firstChild);
            setTimeout(function () {
                element.media = 'all';
            });
            setTimeout(function () {
                document.body.classList.add('animated');
            }, 600);
        })();
    </script>

<% else %>
    <% require themedCSS("dist/styles/main") %>
<% end_if %>


