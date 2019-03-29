import React, { Component } from 'react'
import logo from '../../assets/invest1.png';
import './../../register.css';


export default class Register extends Component {
    render() {
      return (
				<div id="login">
				<img id="sabil" src={logo} />
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Register</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br/>
                                <input type="email" name="email" id="email" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Nama:</label><br/>
                                <input type="text" name="nama" id="nama" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Pekerjaan:</label><br/>
                                <input type="text" name="pekerjaan" id="pekerjaan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="tgl" class="text-info">Tanggal Lahir:</label><br/>
                                <input type="text" name="tgl" id="tgl" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="kewarganegaraan" class="text-info">Kewarganegaraan:</label><br/>
                                <input type="text" name="kewarganegaraan" id="kewarganegaraan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="alamat" class="text-info"> Alamat:</label><br/>
                                <input type="text" name="alamat" id="alamat" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="kode_pos" class="text-info"> Kode Pos:</label><br/>
                                <input type="number" name="kode" id="kode" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info"> Password:</label><br/>
                                <input type="password" name="password" id="password" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="alamat" class="text-info">Ulangi Password:</label><br/>
                                <input type="password" name="password" id="password" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="unggah" class="text-info">Unggah Foto KTP:</label><br/>
                                <input type="file" />
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info">
																 <span>
																	{/* <input id="remember-me" name="remember-me" type="checkbox" /> */}
																	</span>
																	</label><br/>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
       )
    }
  }