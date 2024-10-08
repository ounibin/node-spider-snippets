const CryptoJS = require("crypto-js");

// 从数据中获取密文和IV
const encryptedData = "4gQzAf1618aoE14ck8PRMNjYDjpuXuZpfiQQO1aGLG4uj8pCMD4xhxuDTWfwbVlx2pBoaCjREM7qLLDNnJHlpGfQYuyQd7oe+ahJULMdV86kBp2BBYlv3t/+zJ9kBuOOff0A7G39tH2LvsjBcyMsmwfe1sVJ7rlnZYo2TYXe9eIlqm2r5rpp5fmn9YAbRvwNvwV1wtv0MAeS5hk11voHGZw6glb8gZwICnbDf8dj6sgGQYcLNmfR4v/tD/pNydy99N3naxYB4rg/18JR/h44XuAy4c4u9Zi+7lDbKU6zHs+xLcjITz843WsDgeRPwySoI8GoIdcYFeu9bQHc9SizzcDF8IHUnSsWz6miqs+57IbVRe+xfWHwVDES6m+oEdyzGRYcNKkJmy6AJVeWcwzB9guYy0B+C816hGEHL86FKOTOL55MV9b5KnTzAUXrb5eIHgmhAKlEm6gedKyAWE/DhW+UsaYKc9cHTh88Sil/1+pbY+dOGzYkMOBAIWEx6DJKmjcBCz5CNBCYJuLvPzZ2iXFDnX4G2ZGhJs5xLZqYfV6UM/KplnxKlVOXKsKjIK0AybEGrDxK2GbSF8J1FzW6rouzJsVAxIhg6TsIfzcUoQ/tU1qmwuTlJftEUMYtx9PrOjVjOraGctc257qjNI47nYj91YYlvabCKz8nUwBwoJQfQb2+SpAlIVJcURy2tF5TcXG7xzjIjmUBzWFE7N0fr0u5DPJZ2DbGc95lWiEvnP+LEtvbXevw7wk2YdpaaVv6yMTrf0TBWRkLAVEkz+/Kwm2f9CHfkAd0QU277L2G8dwker7f8lER2nQWbE90If/+Adh8fpOUqoS05jgG0mbM5zCyY/W4He+SzaSSs0wjnN6hUjwfe8QxHRt8w70AXqcNzDILFR9DKJhbWlfUylAkuGyONSqMNBVXP4qVIG6kOTADlectRmXAR830/NzTigqh3uTc79hTBZ/ZjtNxmRXEb5besSSBZb9ZALKKgw05uNwJmTzLmivErxG3+xJjnGH8oUjNgvd58tY0FttjR/6ydvlqBSBM0T3PD18J/xst874RzCbCig8tee+6VVpqlMlpc4hYhBZdHQ9pyP0k1998OJZs1b31MqK/LHsTG6u9jFKSluYTJKhxTR5rJUj1xz6cRyPWx1+j8DtAnQjmUzjir+UNIom2NOR8tyP2GyFo8zA6SAQfdbfye/sMWccwepahhkVNFiVSEA4OSneG/S36GVOHpmZzBXtYx6w6u+sW06YWIJyoHYv8Qvs99BnorFeUhcFVJyYhxv7R3W371PV/PdN9B2fjPflHkIs52W9sytZQwXWJvew2FOC/QY0LmitnhPojM95OMdF7AkBpNLDl26BGMmt2Qb0D22Vey7nE2Lwn3dXFixonDx403Sz+pCFtk39XvisxC0REVUK3MIJkNAf14C8gwRBjXQ0nvnRy1dpFBbR29JKmw3S0XhmRi9ilS3gpvJ/iLuMg/eFVCXQ4oVHKOghSPxZskGkWptiz3nE=";
const iv = CryptoJS.enc.Hex.parse("30df5c40989ed62c8e49b556da48c8c0");

// 假设你有一个密钥，16字节（128位）
const key = CryptoJS.enc.Utf8.parse("30df5c40989ed62c8e49b556da48c8c0");

// 解密过程
const decrypted = CryptoJS.AES.decrypt(
  {
    ciphertext: CryptoJS.enc.Base64.parse(encryptedData)
  },
  key,
  {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }
);

// 将解密的字节数据转换为UTF8字符串
const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

console.log(decryptedText);
