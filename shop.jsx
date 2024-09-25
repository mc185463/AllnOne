<t name="Products" t-name="website_sale.products">
        <t t-call="website.layout">
            <t t-set="additional_title">Shop</t>
            <t t-set="grid_block_name">Grid</t>
            <t t-set="product_block_name">Product</t>

            <!-- Qweb variable defining the class suffix for navbar items.
                 Change accordingly to the derired visual result (eg. `primary`, `dark`...)-->
            <t t-set="navClass" t-valuef="light"/>

            <!-- Check for active options: the stored value may be used in sub-templates too  -->
            <t t-set="opt_wsale_categories" t-value="is_view_active('website_sale.products_categories')"/>
            <t t-set="opt_wsale_attributes" t-value="is_view_active('website_sale.products_attributes')"/>
            <t t-set="opt_wsale_filter_price" t-value="is_view_active('website_sale.filter_products_price')"/>
            <t t-set="opt_wsale_filter_tags" t-value="is_view_active('website_sale.filter_products_tags')"/>

            <t t-set="opt_wsale_categories_top" t-value="is_view_active('website_sale.products_categories_top')"/>
            <t t-set="opt_wsale_attributes_top" t-value="is_view_active('website_sale.products_attributes_top')"/>

            <t t-set="website_sale_pricelists" t-value="website.get_pricelist_available(show_visible=True)"/>
            <t t-set="website_sale_sortable" t-value="website._get_product_sort_mapping()"/>

            <t t-set="hasLeftColumn" t-value="opt_wsale_categories or opt_wsale_attributes"/>

            <t t-set="isFilteringByPrice" t-if="opt_wsale_filter_price" t-value="float_round(available_min_price, 2) != float_round(min_price, 2) or float_round(available_max_price, 2) != float_round(max_price, 2)"/>
            <t t-set="hasPricelistDropdown" t-value="website_sale_pricelists and len(website_sale_pricelists)&gt;1"/>
            <t t-set="isSortingBy" t-value="[sort for sort in website_sale_sortable if sort[0]==request.params.get('order', '')]"/>

            <div id="wrap" class="js_sale o_wsale_products_page">
                <div class="oe_structure oe_empty oe_structure_not_nearest" id="oe_structure_website_sale_products_1"/>
                <div class="container oe_website_sale pt-2">
                    <div class="row o_wsale_products_main_row align-items-start flex-nowrap">
                        <aside t-if="hasLeftColumn" id="products_grid_before" class="d-none d-lg-block position-sticky col-3 px-3 clearfix">
                            <div class="o_wsale_products_grid_before_rail vh-100 ms-n2 mt-n2 pt-2 p-lg-2 pb-lg-5 ps-2 overflow-y-scroll">
                                <div t-if="opt_wsale_categories" class="products_categories mb-3">
                                    <t t-call="website_sale.products_categories_list"/>
                                </div>
                                <div class="products_attributes_filters"/>
                                <t t-if="opt_wsale_filter_price and opt_wsale_attributes" t-call="website_sale.filter_products_price"/>
                            </div>
                        </aside>
                        <div id="products_grid" t-attf-class="#{'o_wsale_layout_list' if layout_mode == 'list' else ''} {{'col-lg-9' if hasLeftColumn else 'col-12'}}">
                            <t t-call="website_sale.products_breadcrumb">
                                <t t-set="_classes" t-valuef="d-none d-lg-flex w-100 p-0 small"/>
                            </t>
                            <div class="products_header btn-toolbar flex-nowrap align-items-center justify-content-between gap-3 mb-3">
                                <t t-if="is_view_active('website_sale.search')" t-call="website_sale.search">
                                    <t t-set="search" t-value="original_search or search"/>
                                    <t t-set="_form_classes" t-valuef="d-lg-inline {{'d-inline' if not category else 'd-none'}}"/>
                                </t>

                                <t t-call="website_sale.pricelist_list">
                                    <t t-set="_classes" t-valuef="d-none d-lg-inline"/>
                                </t>

                                <t t-if="is_view_active('website_sale.sort')" t-call="website_sale.sort">
                                    <t t-set="_classes" t-valuef="d-none me-auto d-lg-inline-block"/>
                                </t>

                                <div t-if="category" class="d-flex align-items-center d-lg-none me-auto">
                                    <t t-if="not category.parent_id" t-set="backUrl" t-valuef="/shop"/>
                                    <t t-else="" t-set="backUrl" t-value="keep('/shop/category/' + slug(category.parent_id), category=0)"/>

                                    <a t-attf-class="btn btn-{{navClass}} me-2" t-att-href="category.parent_id and keep('/shop/category/' + slug(category.parent_id), category=0) or '/shop'">
                                        <i class="fa fa-angle-left"/>
                                    </a>
                                    <h4 t-out="category.name" class="mb-0 me-auto"/>
                                </div>

                                <t t-if="is_view_active('website_sale.add_grid_or_list_option')" t-call="website_sale.add_grid_or_list_option">
                                    <t t-set="_classes" t-valuef="d-flex"/>
                                </t>

                                <button t-if="is_view_active('website_sale.sort') or opt_wsale_categories or opt_wsale_attributes or opt_wsale_attributes_top" t-attf-class="btn btn-{{navClass}} position-relative {{not opt_wsale_attributes_top and 'd-lg-none'}}" data-bs-toggle="offcanvas" data-bs-target="#o_wsale_offcanvas">
                                    <i class="fa fa-sliders"/>
                                    <span t-if="isFilteringByPrice or attrib_set or tags" t-attf-class="position-absolute top-0 start-100 translate-middle border border-{{navClass}} rounded-circle bg-danger p-1"><span class="visually-hidden">filters active</span></span>
                                </button>
                            </div>

                            <t t-if="opt_wsale_categories_top" t-call="website_sale.filmstrip_categories"/>

                            <div t-if="original_search and products" class="alert alert-warning mt8">
                                No results found for '<span t-esc="original_search"/>'. Showing results for '<span t-esc="search"/>'.
                            </div>

                            <t t-if="category">
                                <t t-set="editor_msg">Drag building blocks here to customize the header for "<t t-esc="category.name"/>" category.</t>
                                <div class="mb16" id="category_header" t-att-data-editor-message="editor_msg" t-field="category.website_description"/>
                            </t>

                            <div t-if="products" class="o_wsale_products_grid_table_wrapper pt-3 pt-lg-0">
                                <table class="table table-borderless h-100 m-0" t-att-data-ppg="ppg" t-att-data-ppr="ppr" t-att-data-default-sort="website.shop_default_sort" t-att-data-name="grid_block_name">
                                    <colgroup t-ignore="true">
                                        <!-- Force the number of columns (useful when only one row of (x < ppr) products) -->
                                        <col t-foreach="ppr" t-as="p"/>
                                    </colgroup>
                                    <tbody>
                                        <tr t-foreach="bins" t-as="tr_product">
                                            <t t-foreach="tr_product" t-as="td_product">
                                                <t t-if="td_product">
                                                    <!-- We use t-attf-class here to allow easier customization -->
                                                    <td t-att-colspan="td_product['x'] != 1 and td_product['x']" t-att-rowspan="td_product['y'] != 1 and td_product['y']" t-attf-class="oe_product" t-att-data-ribbon-id="td_product['ribbon'].id" t-att-data-name="product_block_name">
                                                        <div t-attf-class="o_wsale_product_grid_wrapper position-relative h-100 o_wsale_product_grid_wrapper_#{td_product['x']}_#{td_product['y']}">
                                                            <t t-call="website_sale.products_item">
                                                                <t t-set="product" t-value="td_product['product']"/>
                                                            </t>
                                                        </div>
                                                    </td>
                                                </t>
                                                <td t-else=""/>
                                            </t>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div t-else="" class="text-center text-muted mt128 mb256">
                                <t t-if="not search">
                                    <h3 class="mt8">No product defined</h3>
                                    <p t-if="category">No product defined in this category.</p>
                                </t>
                                <t t-else="">
                                    <h3 class="mt8">No results</h3>
                                    <p>No results for "<strong t-esc="search"/>"<t t-if="category"> in category "<strong t-esc="category.display_name"/>"</t>.</p>
                                </t>
                                <p t-ignore="true" groups="sales_team.group_sale_manager">Click <i>'New'</i> in the top-right corner to create your first product.</p>
                            </div>
                            <div class="products_pager d-flex justify-content-center pt-5 pb-3">
                                <t t-call="website.pager"/>
                            </div>
                        </div>
                    </div>

                    <t t-call="website_sale.o_wsale_offcanvas"/>
                </div>
                <div class="oe_structure oe_empty oe_structure_not_nearest" id="oe_structure_website_sale_products_2"/>
            </div>
        </t>
    </t>