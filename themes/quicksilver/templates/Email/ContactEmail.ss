<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>{$Subject}</title>
    <style type="text/css">
        @import url(http://fonts.googleapis.com/css?family=Droid+Sans);

        img {
            max-width: 600px;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
            border: 0;
            outline: none;
            color: #bbbbbb;
        }

        a img {
            border: none;
        }

        td, h1, h2, h3 {
            font-family: "Trebuchet MS", Helvetica, sans-serif;
            font-weight: 400;
        }

        td {
            text-align: center;
        }

        body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100%;
            height: 100%;
            color: #37302d;
            background: #ffffff;
            font-size: 16px;
        }

        table {
            border-collapse: collapse !important;
        }

        .headline {
            color: #ffffff;
            font-size: 36px;
        }

        .force-full-width {
            width: 100% !important;
        }


    </style>

    <style type="text/css" media="screen">
        @media screen {
            td, h1, h2, h3 {
                font-family: 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
            }
        }
    </style>

    <style type="text/css" media="only screen and (max-width: 480px)">
        @media only screen and (max-width: 480px) {

            table[class="w320"] {
                width: 320px !important;
            }

        }
    </style>
</head>
<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
<table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
    <tr>
        <td align="center" valign="top" bgcolor="#ffffff" width="100%">
            <center>
                <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="600" class="w320">
                    <tr>
                        <td align="center" valign="top">


                            <table style="padding-top:20px;margin: 0 auto;text-align:center;" cellpadding="0" cellspacing="0" width="100%" bgcolor="#414141">
                                <tr>
                                    <td>
                                        <br>
                                        <img src="http://assets.toast.co.nz/toast/logo.png" width="231" height="80" alt="Quicksilver">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="headline" style="color:white;font-size:22px;padding:0 10px;">
                                        <br>
                                        New Message for {$SiteConfig.Title}
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <center>
                                            <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" width="60%">
                                                <tr>
                                                    <td style="color:white;">
                                                        <br>
                                                    </td>
                                                </tr>
                                            </table>
                                        </center>

                                    </td>
                                </tr>

                            </table>

                            <table style="margin: 0 auto;text-align:center" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f1f1f1">
                                <tr>
                                    <td style="background-color:#f1f1f1;color:#231f20;font-size:22px;" class="headline">
                                        <br>
                                        $Title
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        $Phone<br>
                                        $Email
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <center>
                                            <table style="margin: 0 auto;font-size:16px;padding:0 10px;" cellpadding="0" cellspacing="0" width="60%">
                                                <tr>
                                                    <td>
                                                        <br>
                                                        $Message
                                                        <br><br>
                                                        <br><br>
                                                    </td>
                                                </tr>
                                            </table>
                                        </center>

                                    </td>

                                </tr>


                            </table>

                            <table style="margin: 0 auto;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#414141" style="margin: 0 auto">
                                <tr>
                                    <td style="background-color:#414141;">
                                        <br>

                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#bbbbbb; font-size:8px;padding:20px;">
                                        This message (including any attachments) may contain confidential, proprietary, privileged and/or private
                                        information. The information is intended to be for the use of the individual or entity designated above. If
                                        you are not the intended recipient of this message, please notify the sender immediately, and delete the
                                        message and any attachments. Any disclosure, reproduction, distribution or other use of this message or
                                        any attachments by an individual or entity other than the intended recipient is prohibited.
                                        <br><br>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#bbbbbb; font-size:12px;text-align:center;">
                                        © $Now.format('Y') All Rights Reserved
                                        <br>
                                        <br>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </center>
        </td>
    </tr>
</table>
</body>
</html>
