<div class="wysiwyg pagespeed">
    <div class="innerWrap">
        <% loop $Pages %>
            <div class="pageSpeed__item" id="page_{$Pos}">
                <div class="pageSpeed__item__underlay"></div>
                <div class="pageSpeed__item__loader"></div>
                <p class="pageSpeed__item__link">Fetching <i>$AbsoluteLink</i></p>
            </div>

            <script>
                let url{$Pos} = '{$Top.AbsoluteLink}/_pagespeed/getPageSpeed?url={$AbsoluteLink}';
                console.log(url{$Pos});
                fetch(url{$Pos}).then((resp) => resp.json())
                        .then(function (page) {
                            if (page === 'Will not work on local URLs') {
                                document.querySelector('#page_{$Pos}').innerHTML = `<p>Will not work on local URLs</p>`;
                                return false;
                            }
                            let items = ``;

                            document.querySelector('#page_{$Pos}').innerHTML = `
                            <p>${page.id}</p>
                            <div class="ps__score">
                                <p class="ps__score__goal"></p>
                                <p class="ps__score__actual ${(page.ruleGroups.SPEED.score > 80) ? 'pass' : 'fail'}" style="width:${page.ruleGroups.SPEED.score}%"><b>${page.ruleGroups.SPEED.score}%<b></p>
                            </div>
                            `;
                        });
            </script>
        <% end_loop %>
    </div>
</div>
