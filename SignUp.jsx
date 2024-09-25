<t t-name="website.sign-up">
    <t t-call="website.layout">
        <div id="wrap" class="oe_structure oe_empty"><section class="s_website_form pt16 pb16 o_colored_level" data-vcss="001" data-snippet="s_website_form" data-name="Form">
        <div class="container">
            <form action="/website/form/" method="post" enctype="multipart/form-data" class="o_mark_required" data-mark="*" data-pre-fill="true" data-model_name="mail.mail" data-success-mode="redirect" data-success-page="/contactus-thank-you">
                <div class="s_website_form_rows row s_col_no_bgcolor">
                    
                    <div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_custom s_website_form_required" data-type="char">
                        <div class="row s_col_no_resize s_col_no_bgcolor">
                            <label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="obij2aulqyau">
                                <span class="s_website_form_label_content o_default_snippet_text">Your Name</span>
                                
                            <span class="s_website_form_mark"> *</span></label>
                            <div class="col-sm">
                                <input class="form-control s_website_form_input" type="text" name="name" required="1" data-fill-with="name" id="obij2aulqyau" placeholder="Enter your name here"/>
                            </div>
                        </div>
                    </div>
                    
                    <div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_model_required" data-type="email"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="ofx6z0im6a46"><span class="s_website_form_label_content">Password</span><span class="s_website_form_mark"> *</span></label><div class="col-sm"><input class="form-control s_website_form_input" type="email" name="email_from" required="" placeholder="Enter your password" id="ofx6z0im6a46" data-fill-with="email"/></div></div></div>
                    
                    <div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_model_required" data-type="char"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="oopb6uqu942c"><span class="s_website_form_label_content">Confirm Password</span><span class="s_website_form_mark"> *</span></label><div class="col-sm"><input class="form-control s_website_form_input" type="text" name="subject" required="" placeholder="Re-enter your password" id="oopb6uqu942c" data-fill-with="undefined"/></div></div></div>
                    <div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_custom s_website_form_required" data-type="email"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="orscpoz82tmp"><span class="s_website_form_label_content">Email</span><span class="s_website_form_mark"> *</span></label><div class="col-sm"><input class="form-control s_website_form_input" type="email" name="Email" required="1" placeholder="Enter your email address" id="orscpoz82tmp" data-fill-with="undefined"/></div></div></div>
                    <div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_custom s_website_form_required" data-type="many2one"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="o66thoyv9cg6"><span class="s_website_form_label_content">User Type</span><span class="s_website_form_mark"> *</span></label><div class="col-sm"><select class="form-select s_website_form_input" name="User Type" required="1" id="o66thoyv9cg6"><option id="o66thoyv9cg60" value="Select" selected="selected">Select</option><option id="o66thoyv9cg61" value="Buyer">Buyer</option><option id="o66thoyv9cg62" value="Seller">Seller</option></select></div></div></div><div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_custom s_website_form_required" data-type="tel"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="o5ixoigmi91f"><span class="s_website_form_label_content">Phone Number</span><span class="s_website_form_mark"> *</span></label><div class="col-sm"><input class="form-control s_website_form_input" type="tel" name="Phone Number" placeholder="+91" id="o5ixoigmi91f" data-fill-with="undefined" required=""/></div></div></div><div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_dnone"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px"><span class="s_website_form_label_content"/></label><div class="col-sm"><input type="hidden" class="form-control s_website_form_input" name="email_to" value="info@yourcompany.example.com"/></div></div></div><div data-name="Field" class="s_website_form_field mb-3 col-12 s_website_form_custom" data-type="text"><div class="row s_col_no_resize s_col_no_bgcolor"><label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px" for="ots7kzct9du"><span class="s_website_form_label_content">Address</span></label><div class="col-sm"><textarea class="form-control s_website_form_input" name="Address" placeholder="Enter your address" id="ots7kzct9du" rows="3"/></div></div></div><div class="mb-0 py-2 col-12 s_website_form_submit" data-name="Submit Button">
                        <div style="width: 200px;" class="s_website_form_label"/>
                        <a href="#" role="button" class="btn btn-primary s_website_form_send o_default_snippet_text">Submit</a>
                        <span id="s_website_form_result"/>
                    </div>
                </div>
            </form>
        </div>
    </section></div>
    </t>
</t>