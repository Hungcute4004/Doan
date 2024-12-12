import React from "react";
import './login.css';

const Login = () =>{
    return(
        <>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Tạo Tài Khoản</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Đăng Ký Bằng Email</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Đăng Ký</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Đăng nhập</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>Bạn đã có Tài Khoản</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Quên Mật Khẩu?</a>
                        <button>Đăng Nhập</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Mừng quay trơ lại!</h1>
                            <p>Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                            <button class="ghost" id="signIn">Đăng Nhập</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Chào mừng!</h1>
                            <p>Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                            <button class="ghost" id="signUp">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login