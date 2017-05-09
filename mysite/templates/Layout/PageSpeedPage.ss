<div class="wysiwyg pageSpeed">
    <div class="innerWrap">

        <% loop $Menu(1).limit(1) %>

            <div class="pageSpeed__item" id="page_{$Pos}">
                <div class="pageSpeed__item__underlay"></div>
                <div class="pageSpeed__item__loader"></div>
                <p class="pageSpeed__item__link">Fetching <i>$AbsoluteLink</i></p>
            </div>

            <script>
                let url{$Pos} = '{$Top.AbsoluteLink}getPageSpeed';

                fetch(url{$Pos}).then((resp) => resp.json())
                        .then(function (page) {
                            let items = ``;
                            console.log(page);
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