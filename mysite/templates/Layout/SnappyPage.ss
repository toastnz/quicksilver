<div id="snappy" data-get-url="$Link('getSnappy')" data-post-url="$Link('saveSnappy')" data-publish-url="$Link('publishSnappy')">

    <div id="wysiwyg">
        <button data-action="bold"><i class="material-icons">format_bold</i></button>
        <button data-action="italic"><i class="material-icons">format_italic</i></button>
        <button data-action="underline"><i class="material-icons">format_underlined</i></button>
        <button data-action="justifyLeft"><i class="material-icons">format_align_left</i></button>
        <button data-action="justifyCenter"><i class="material-icons">format_align_center</i></button>
        <button data-action="justifyRight"><i class="material-icons">format_align_right</i></button>
        <button data-action="justifyFull"><i class="material-icons">format_align_justify</i></button>
        <button data-action="insertUnorderedList"><i class="material-icons">format_list_bulleted</i></button>
        <button data-action="insertOrderedList"><i class="material-icons">format_list_numbered</i></button>
        <a href="#">
            <i class="material-icons">format_size</i>
            <ul class="type">
                <li>
                    <button data-action="h1">Heading 1</button>
                </li>
                <li>
                    <button data-action="h2">Heading 2</button>
                </li>
                <li>
                    <button data-action="h3">Heading 3</button>
                </li>
                <li>
                    <button data-action="h4">Heading 4</button>
                </li>
                <li>
                    <button data-action="h5">Heading 5</button>
                </li>
                <li>
                    <button data-action="h6">Heading 6</button>
                </li>
                <li>
                    <button data-action="p">Paragraph</button>
                </li>
            </ul>
        </a>
        <button data-action="backColor"><i class="material-icons">format_color_fill</i></button>
        <button data-action="foreColor"><i class="material-icons">format_color_text</i></button>
        <button data-action="insert_link"><i class="material-icons">insert_link</i></button>
        <a href="#" class="js-close-textEditor"><i class="material-icons">close</i></a>
        <a href="#" class="js-clear-data"><i class="material-icons">rowing</i></a>
    </div>

    <div id="snappySidebar">

        <div id="scroll">
            <div id="modules">

                <div class="module sidebarModule" data-module-type="blockquote">
                    <img src="$ThemeDir/dist/images/snappy/blockquote.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="text">
                    <img src="$ThemeDir/dist/images/snappy/text.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="list">
                    <img src="$ThemeDir/dist/images/snappy/list.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="heading">
                    <img src="$ThemeDir/dist/images/snappy/heading.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="divider">
                    <img src="$ThemeDir/dist/images/snappy/divider.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="padding">
                    <img src="$ThemeDir/dist/images/snappy/padding.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="image">
                    <img src="$ThemeDir/dist/images/snappy/image.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="imageText">
                    <img src="$ThemeDir/dist/images/snappy/imageText.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="trippleImage">
                    <img src="$ThemeDir/dist/images/snappy/trippleImage.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="video">
                    <img src="$ThemeDir/dist/images/snappy/video.png">
                    <div class="js-drag"></div>
                </div>

                <div class="module sidebarModule" data-module-type="columnText">
                    <img src="$ThemeDir/dist/images/snappy/columnText.png">
                    <div class="js-drag"></div>
                </div>
            </div>
        </div>
    </div>

    <div id="snappyContent">
        $Content
    </div>

    <div class="dataModal">
        <div class="wrap">
            <textarea spellcheck="false" class="html"></textarea>
            <button class="js-cancel-save-data destructive">Cancel</button>
            <button class="js-save-data constructive">Save</button>
        </div>
    </div>

    <div class="deleteModal">
        <div class="wrap">
            <p>Are you sure you want to delete this block?</p>
            <button class="js-confirm-delete destructive">Delete</button>
            <button class="js-cancel-delete nominal">Cancel</button>
        </div>
    </div>

</div>

<%--<div style="position:fixed;right:12px;top:12px;background:red;color:white;">--%>
    <%--<button class="js-publish">PUBLISH</button>--%>
    <%--<button class="js-draft">DRAFT</button>--%>
    <%--<button class="js-live">LIVE</button>--%>
    <%--<button class="js-discard-draft">Discard Draft</button>--%>
<%--</div>--%>

<div id="snappyMenu">
    <i class="material-icons">menu</i>

    <div class="mainMenu js-toggle-sidebar" data-tooltip="Sidebar">
        <i class="material-icons">dns</i>
    </div>

    <div class="subMenu blue" data-tooltip="Change Mode">
        <i class="material-icons">mode_edit</i>
    </div>

    <div class="subMenu green js-publish" data-tooltip="Save Changes">
        <i class="material-icons">save</i>
    </div>

    <div class="subMenu red js-discard-draft" data-tooltip="Discard Draft">
        <i class="material-icons">replay</i>
    </div>


</div>