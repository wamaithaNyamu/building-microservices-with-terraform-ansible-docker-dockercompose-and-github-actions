<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
![building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions](./Images/cover.png)
Accompanying blog can be found [here](https://wamaithanyamu.com/building-microservices-using-terraform-ansible-docker-docker-compose-and-github-actions
)
<div>
<h3 align="center">Building a microservices using Terraform Ansible Docker Docker-Compose and Github actions.
</h3>


</div>

<!-- GETTING STARTED -->
### Prerequisites

1. A linode api token. 
2. Create a .env file in the microservices folder. Add the following value
3. Change the branch you need the Github Actions to run on.

```sh

    MONGO_INITDB_DATABASE=admin
    MONGO_INITDB_ROOT_USERNAME=root
    MONGO_INITDB_ROOT_PASSWORD=example
    MONGODB_CONNSTRING=mongodb://root:example@mongo:27017/test?directConnection=true&authSource=admin&replicaSet=replicaset&retryWrites=true

```
3. In the **Terraform directory** create the file **terraform.tfvars** and add the following:

```sh
linode-token="add_token_here_within_the_quotes"
root_pass="generate_a_strong_password_and_add_it_here_between_this_quotes"
```

### How to run the code using your laptop as the Ansible controller machine

Navigate to the Scripts folder

```sh
    cd Scripts
```

Run the bash installation script. This script installs Ansible, Terraform and ssh pass to your laptop
```sh

    ./installations.sh
    
```

Run the Terraform setup script that spins up a new ubuntu VM on Linode, generates ssh keys , saves the ip address on the inventory.ini, logs in to the VM and pastes the public key.

```sh

   ./terraform_setup.sh
    
```

Run ansible script. The Script, logs in to the VM, installs the needed modules , spins up the docker compose

   ```sh
     ./run_ansible.sh

   ```

### How to run the code with Github Actions as the controller machine

Navigate to the Scripts folder
```sh
    cd Scripts
```

Remove the ansible installation block.Run the bash installation script. This script installs Terraform and ssh pass to your laptop.
 
```sh
    ./installations.sh
    
```


Push the code to github. Ensure you add the following to github secrets:

```sh
    MONGO_INITDB_DATABASE=admin
    MONGO_INITDB_ROOT_USERNAME=root
    MONGO_INITDB_ROOT_PASSWORD=example
    MONGODB_CONNSTRING=mongodb://root:example@mongo:27017/test?directConnection=true&authSource=admin&replicaSet=replicaset&retryWrites=true

```
Copy the private key generated to github secrets. 

```sh
    SSH_PRIVATE_KEY=<copy-here>

```

View the private key using the following command

```ssh

cat $HOME/.ssh/microservicekeys/id_rsa
 
```

Final github secrets should be as follows:
![building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions](./Images//secrets.png)




See the [open issues](https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/issues) for a full list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Tweet me at- [@wamaithanyamu](https://twitter.com/wamaithanyamu) or shoot me an email at hello@wamaithanyamu.com

Project Link: [https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions
](https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions.svg?style=for-the-badge

[contributors-url]: https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions.svg?style=for-the-badge

[forks-url]: https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/network/members

[stars-shield]: https://img.shields.io/github/stars/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions.svg?style=for-the-badge

[stars-url]: https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/stargazers


[issues-shield]: https://img.shields.io/github/issues/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions.svg?style=for-the-badge

[issues-url]: https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/issues

[license-shield]: https://img.shields.io/github/license/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions.svg?style=for-the-badge


[license-url]: https://github.com/wamaithanyamu/building-microservices-with-terraform-ansible-docker-dockercompose-and-github-actions/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/wamaithanyamu
[product-screenshot]: Images/cover.png

