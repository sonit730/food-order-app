components:
- Cart
    + Cart
    + CartIcon
    + CartItem
- Layout:
    + Header:
        - HeaderCartButton
- Meals:
    + Meals:
        -  MealsSummary
        -  AvailableMeals:
            + MealItem:
                + MealItemForm
- UI
    + Card
    + Input
    + Modal
-----------------------
App:
    Header: Menu của website
        HeaderCartButton: Custom nút
            CartIcon: Viết syle của Icon, Icon đặt bên trong nút
    Meals:
        MealsSummary: Mô tả về thực phẩm
        AvailableMeals: Danh sách thực phẩm
            UI/Card: Bao AvailableMeals lại
            MealItem:
                MealItemForm: Thêm sản phẩm
                    UI/Input: Custom form_control có input