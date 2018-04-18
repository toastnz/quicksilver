<% include QuickStatic\Template %>

<%---------------------------------------------------------------%>
<%--                Static Block Descriptive Text              --%>
<%---------------------------------------------------------------%>

<style type="text/css">
    [data-block] {
        position: relative;
    }

    [data-block]:after {
        display: block;
        position: absolute;
        right: 0;
        padding: 3px 5px 2px;
        font-weight: 600;
        color: white;
        top: 0;
        content: attr(data-block);
        background: rgba(0, 0, 0, .4);
        z-index: 99;
        font-size: 1.4rem;
    }
</style>