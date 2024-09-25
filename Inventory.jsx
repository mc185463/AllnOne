<t t-name="website.inventory2">
    <t t-call="website.layout">
        <div id="wrap" class="oe_structure oe_empty"><section class="s_searchbar o_colored_level o_cc o_cc2 pt48 pb48" data-snippet="s_searchbar" data-name="Search">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 o_colored_level">
                    <h2 class="o_default_snippet_text">Search your product</h2><form method="get" data-snippet="s_searchbar_input" class="o_searchbar_form s_searchbar_input" action="/website/search">
            <div role="search" class="input-group ">
        <input type="search" name="search" class="search-query form-control oe_search_box  " placeholder="Search..." data-search-type="all" data-limit="5" data-display-image="true" data-display-description="true" data-display-extra-link="true" data-display-detail="true" data-order-by="name asc"/>
        <button type="submit" aria-label="Search" title="Search" class="btn oe_search_button btn-primary">
            <i class="oi oi-search"/>
        </button>
    </div>

            <input name="order" type="hidden" class="o_search_order_by" value="name asc"/>
            
    
        </form>
                </div>
            </div>
        </div>
    </section><section data-snippet="s_dynamic_snippet_products" class="s_dynamic_snippet_products s_dynamic pt32 pb32 o_colored_level s_product_product_borderless_1 o_dynamic_empty" data-name="Products" data-product-category-id="all" data-show-variants="true" data-number-of-records="16" data-filter-id="1" data-template-key="website_sale.dynamic_filter_template_product_product_borderless_1" data-carousel-interval="5000">
            <div class="o_not_editable container">
                <div class="css_non_editable_mode_hidden">
                    <div class="missing_option_warning alert alert-info rounded-0 fade show d-none d-print-none o_default_snippet_text">
                        Your Dynamic Snippet will be displayed here... This message is displayed because you did not provided both a filter and a template to use.<br/>
                    </div>
                </div>
                <div class="dynamic_snippet_template"/>
            </div>
        </section></div>
    </t>
</t>