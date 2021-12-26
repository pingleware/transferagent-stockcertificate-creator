var createStockCertificate = function() {
    var investor_name = id("investor-name").value;
    var investor_wallet = id("investor-wallet").value;
    var company_name = id("company-name").value;
    var transfer_agent = id("transfer-agent").value;
    var state_of_incorporation = id("state-of-incorporation").value;
    var cusip = id("cusip").value;
    var isin = id("isin").value;
    var offering_type = id("share-type").value;
    var par_value = id("par-value").value;
    var issue_date = id("issue-date").value;
    var share_qty = id("share-qty").value;
    var per_share_price = id("share-price").value;
    var officer_name_1 = id("officer-1").value;
    var officer_title_1 = id("officer-title-1").value;
    var officer_name_2 = id("officer-2").value;
    var officer_title_2 = id("officer-title-2").value;
    
    var stockcertificate = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
    <html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=windows-1252"/>
        <title></title>
        <meta name="generator" content="LibreOffice 7.2.1.2 (Windows)"/>
        <meta name="created" content="2021-12-26T04:30:09"/>
        <meta name="changed" content="2021-12-26T10:06:36.744000000"/>
        <meta name="AppVersion" content="15.0000"/>
        <style type="text/css">
            @page { size: 8.5in 11in; margin: 0.79in }
            p { color: #000000; line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.1in; direction: ltr; background: transparent }
            p.western { font-family: "Liberation Serif", serif; font-size: 12pt; so-language: en-US }
            p.cjk { font-family: "NSimSun"; font-size: 12pt; so-language: zh-CN }
            p.ctl { font-family: "Lucida Sans"; font-size: 12pt; so-language: hi-IN }
            td p { color: #000000; text-align: left; orphans: 0; widows: 0; margin-bottom: 0in; direction: ltr; background: transparent }
            td p.western { font-family: "Liberation Serif", serif; font-size: 12pt; so-language: en-US }
            td p.cjk { font-family: "NSimSun"; font-size: 12pt; so-language: zh-CN }
            td p.ctl { font-family: "Lucida Sans"; font-size: 12pt; so-language: hi-IN }
        </style>
    </head>
    <body lang="en-US" text="#000000" link="#000080" vlink="#800000" dir="ltr"><p class="western" align="left" style="orphans: 2; widows: 2">
    <span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">[UNLESS
    THIS CERTIFICATE IS PRESENTED BY AN AUTHORIZED REPRESENTATIVE OF
    ${investor_name}, TO ${company_name} OR ${transfer_agent} AS TRANSFER
    AGENT (THE &ldquo;</span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><b>TRANSFER
    AGENT</b></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&rdquo;),
    AND ANY CERTIFICATE ISSUED IS REGISTERED IN THE NAME OF
    ${investor_name} OR IN SUCH OTHER NAME AS IS REQUESTED BY AN
    AUTHORIZED REPRESENTATIVE OF </span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span lang="en-US"><span style="font-style: normal"><span style="font-weight: normal">${investor_wallet}</span></span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">
    (AND ANY PAYMENT IS MADE TO , OR TO SUCH OTHER ENTITY AS IS REQUESTED
    BY AN AUTHORIZED REPRESENTATIVE OF ), ANY TRANSFER, PLEDGE OR OTHER
    USE HEREOF FOR VALUE OR OTHERWISE BY OR TO ANY PERSON IS WRONGFUL IN
    AS MUCH AS THE REGISTERED OWNER HEREOF, ${investor_name}, HAS AN
    INTEREST HEREIN.</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">TRANSFERS
    OF THIS [GLOBAL] SERIES D PREFERRED STOCK SHALL BE LIMITED TO
    TRANSFERS IN WHOLE, BUT NOT IN PART, TO NOMINEES OF OR TO A SUCCESSOR
    THEREOF OR SUCH SUCCESSOR&rsquo;S NOMINEE AND TRANSFERS OF PORTIONS
    OF THIS [GLOBAL] SERIES D PREFERRED STOCK SHALL BE LIMITED TO
    TRANSFERS MADE IN ACCORDANCE WITH THE RESTRICTIONS SET FORTH IN THE
    RELATED CERTIFICATE OF DESIGNATIONS. IN CONNECTION WITH ANY TRANSFER,
    THE HOLDER WILL DELIVER TO THE TRANSFER AGENT SUCH CERTIFICATES AND
    OTHER INFORMATION AS SUCH TRANSFER AGENT MAY REASONABLY REQUIRE TO
    CONFIRM THAT THE TRANSFER COMPLIES WITH THE FOREGOING RESTRICTIONS.]</span></span></span></font></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">${company_name}</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Incorporated
    under the laws of</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">the
    State of ${state_of_incorporation}</span></span></span></font></font></span></p>
    <center>
        <table width="100%" cellpadding="0" cellspacing="0">
            <col width="119*"/>
    
            <col width="3*"/>
    
            <col width="134*"/>
    
            <tr>
                <td width="46%" style="border: none; padding: 0in"></td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"></td>
                <td width="53%" style="border: none; padding: 0in"></td>
            </tr>
            <tr>
                <td width="46%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    CUSIP: <font color="#000000"><font size="3" style="font-size: 12pt"><span lang="en-US">${cusip}</span></font></font></p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="53%" valign="top" style="border: none; padding: 0in"><p class="western" align="right" style="orphans: 0; widows: 0">
                    SHARE</p>
                </td>
            </tr>
            <tr>
                <td width="46%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    ISIN: ${isin}</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="53%" valign="top" style="border: none; padding: 0in"><p class="western" align="right" style="orphans: 0; widows: 0">
                    <font face="Liberation Serif, serif"><font size="3" style="font-size: 12pt">${offering_type}</font></font></p>
                </td>
            </tr>
        </table>
    </center>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">THIS
    CERTIFICATE IS </span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: normal"><span lang="en-US"><span style="font-style: normal"><span style="font-weight: normal">RESTRICTED</span></span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">:</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">This
    is to certify that </span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span lang="en-US"><span style="font-style: normal"><span style="font-weight: normal">${investor_name}</span></span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">
    is the registered owner of </span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">${share_qty}</span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">
    shares of fully paid and non-assessable ${offering_type},
    ${par_value} par value and a stated amount of ${per_share_price} per
    share of ${company_name}, a ${state_of_incorporation} corporation
    (the &ldquo;</span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><b>Corporation</b></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&rdquo;),
    transferable on the books of the Corporation by the holder hereof, in
    person or by duly authorized attorney, upon surrender of this
    Certificate properly endorsed. This Certificate is not valid unless
    countersigned and registered by the Transfer Agent and Registrar.</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Witness
    the facsimile seal of the Corporation and the facsimile signatures of
    its duly authorized officers.</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Dated:
    ${issue_date}</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">${company_name}</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">	<img src="../../assets/stockcertificate_html_718cdb3675364271.gif" name="Image1" align="left" width="149" height="59" border="0"/>
                    </span></span></span></font></font></font></span><img src="../../assets/stockcertificate_html_72f85bb45766df9a.gif" name="Image2" align="left" width="133" height="60" border="0"/>
    </p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Name;
    ${officer_name_1}					 	Name: ${officer_name_2}</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><font size="1" style="font-size: 8pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Title:
    ${officer_title_1}						Title: ${officer_title_2}</span></span></span></font></font></font></span></p>
    <p class="western" align="left" style="line-height: 115%"><img src="../../assets/stockcertificate_html_46f341f94d36d7c6.gif" name="Image4" align="left" width="110" height="110" border="0"/>
    <br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="line-height: 115%"><br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="line-height: 115%"><br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="line-height: 115%"><br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="line-height: 115%"><font size="1" style="font-size: 8pt">${transfer_agent}</font></p>
    <p class="western" align="left" style="line-height: 115%"><br/>
    <img src="../../assets/stockcertificate_html_59bbb16f5a82523e.png" name="Image3" align="left" width="135" height="61" border="0"/>
    <br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="line-height: 115%"><font size="1" style="font-size: 8pt">Authorized
    Representative</font></p>
    <p class="western" align="left" style="line-height: 115%; page-break-before: always">
    <span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><b>${company_name}</b></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">The
    Corporation will furnish without charge to each stockholder who so
    requests the powers, designations, preferences and relative
    participating, optional or special rights of each class of stock or
    series thereof of the Corporation and the qualifications, limitations
    or restrictions of such preferences and/or rights. Such request
    should be addressed to the Corporation or the Transfer Agent.</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">The
    following abbreviations, when used in the inscription on the face of
    this certificate, shall be construed as though they were written out
    in full according to applicable laws or regulations:</span></span></span></font></font></span></p>
    <center>
        <table width="100%" cellpadding="0" cellspacing="0">
            <col width="56*"/>
    
            <col width="3*"/>
    
            <col width="197*"/>
    
            <tr>
                <td width="22%" style="border: none; padding: 0in"></td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"></td>
                <td width="77%" style="border: none; padding: 0in"></td>
            </tr>
            <tr>
                <td width="22%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    TEN COM -</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="77%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    as tenants in common</p>
                </td>
            </tr>
            <tr>
                <td width="22%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    TEN ENT -</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="77%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    as tenants by the entireties</p>
                </td>
            </tr>
            <tr>
                <td width="22%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    JT TEN -</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="77%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    as joint tenants with rights of survivorship and not as tenants
                    in common</p>
                </td>
            </tr>
            <tr>
                <td width="22%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    UNIF GIFT MIN ACT -</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="77%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    Custodian (Cust) ______________ (Minor) under Uniform Gift to
                    Minors Act</p>
                </td>
            </tr>
            <tr>
                <td width="22%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    _____________</p>
                </td>
                <td width="1%" valign="bottom" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    &nbsp;&nbsp;</p>
                </td>
                <td width="77%" valign="top" style="border: none; padding: 0in"><p class="western" align="left" style="orphans: 0; widows: 0">
                    <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;(State)</p>
                </td>
            </tr>
        </table>
    </center>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Additional
    abbreviations may also be used though not in the above list.</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">For
    Value Received, the undersigned hereby sells, assigns and transfers
    unto</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">(PLEASE
    INSERT SOCIAL SECURITY OR OTHER</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">IDENTIFYING
    NUMBER OF ASSIGNEE)</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">(PLEASE
    PRINT OR TYPEWRITE NAME AND ADDRESS,</span></span></span></font></font></span></p>
    <p class="western" align="center" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">INCLUDING
    ZIP CODE OF ASSIGNEE)</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Shares
    of the capital stock represented by the within Certificate, and do
    hereby irrevocably constitute and appoint Attorney to transfer the
    said stock on the books of the within named Corporation with full
    power of substitution in the premises.</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Dated:</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">NOTICE:
    THE SIGNATURE TO THE ASSIGNMENT MUST CORRESPOND WITH THE NAME AS
    WRITTEN UPON THE FACE OF THE CERTIFICATE IN EVERY PARTICULAR, WITHOUT
    ALTERATION OR ENLARGEMENT OR ANY CHANGE WHATSOEVER.</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Signature(s)
    Guaranteed:_____________________________</span></span></span></font></font></span></p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman, serif"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">THE
    SIGNATURE(S) SHOULD BE GUARANTEED BY AN ELIGIBLE GUARANTOR
    INSTITUTION (BANKS, STOCKBROKERS, SAVINGS AND LOAN ASSOCIATIONS AND
    CREDIT UNIONS WITH MEMBERSHIP IN AN APPROVED SIGNATURE GUARANTEE
    MEDALLION PROGRAM), PURSUANT TO RULE17Ad-15 UNDER THE SECURITIES
    EXCHANGE ACT OF 1934.</span></span></span></font></font></span></p>
    <p class="western" align="left" style="font-variant: normal; letter-spacing: normal">
    <br/>
    <br/>
    
    </p>
    <p class="western" align="left" style="orphans: 2; widows: 2"><br/>
    <br/>
    
    </p>
    </body>
    </html>`;

    return stockcertificate;
}