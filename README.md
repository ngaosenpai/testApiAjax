**ok cái này là để test api đơn giản!

cấu tạo: 
-	file javascript để xử lí ajax ở trong ./public/js/
-	routes ko có gì ngoài có login mặc dù để test nhưng vẫn phải theo MVC cho chuẩn :))
-	controllers đdể xử lí cv cuối cũng cho từng route ở ./controllers/
- 	middleware để xử lí lời gọi ajax là validate.login chỉ làm những việc đơn giản như query db và check thôi. phản hồi lại qua res.json .\

hoạt động của nó thế này:
-	đầu tiên khi gọi đến login thì nó sẽ show trang login ra, user sẽ nhập thông tin vào và nhấn nút gửi.
-	nút gửi sẽ ajax về server lên chính route đó. ở server trên route đó đã có 1 middleware là validate đứng hứng ajax và thực hiện check thông tin gửi về.
- 	middleware sau khi check xong sẽ phản hồi lại lời gọi ajax đó luôn, và data đó sẽ đc lưu trong biến ở bên client. f12 bên browser để xem data đc log ra.
  
