# chatbot-app

Welcome! These instructions describe the prerequisites you should complete before attending the lab session. Please follow these steps to ensure that you are fully prepared to participate on the day of the lab.


## Prepare your Bluemix account

<b>1. Ensure that you have an account on [IBM Bluemix](https://console.ng.bluemix.net/). (If you already have an account, you can proceed to step 2 in this section). </b> 

  1.1 Register for a [Bluemix account](https://console.ng.bluemix.net/registration/), fill out the required details and click 'Create Account'.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/register.PNG)

   You will receive a message to check your mail.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/chkmail.PNG)

   1.2 Please check your email and look for a registration confirmation email from Bluemix.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/mailmsg.PNG)


   1.3 Click on 'Confirm your account' and receive a 'Success' message.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ![](readme_images/success.PNG)


   1.4 Click 'Login' and login with your Bluemix credentials.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ![](readme_images/logmail.PNG)
   


   1.5 Create an Organization and enter any organization name.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/orgmail1.PNG)



   1.6 Create a Space and enter a space name. You can also choose the default space name of 'dev'.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/spacemail.PNG)
   


   1.7 After you receive a success message, please click 'I'm Ready'

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/summary_success.PNG)
 

 You will land on your Bluemix Dashboard.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/dashboard.PNG)



<b> 2. Ensure that you have the necessary space available in your Bluemix account to complete the lab. For the lab, you will be required to deploy 1 application and 2 services. Go to your Bluemix Dashboard to check if you have the required space:</b>
   * The 'Services & APIs' tile shows the number of services you have available. You will require space to deploy two services during the lab. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](readme_images/services2.PNG)

   * The 'Cloud Foundry Apps' tile shows the memory you have available for apps. You will require at least 256 MB of free space to deploy the app for this lab.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](readme_images/services1.PNG)

## Deploy the App

<b>1. Click on the 'Deploy to Bluemix' button below.</b>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/vikramrengarajan/gscfss-conversation-tone)

<b>2. Log in with your Bluemix account.</b>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/deploy.PNG)

<b>3. If you are asked to choose an alias, then follow these instructions. Otherwise, proceed to step 4 in this section. </b>

3.1 Enter a unique alias name and click create.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/alias.PNG)


3.2 Verify your alias name and click continue.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/cont.PNG)


<b>4. Name your app, and then select the Region, Organization and Space where the app will be deployed. Click 'DEPLOY'.</b>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![](readme_images/deploy1.PNG)

* The status of the deployment is shown. This can take approximately 2 minutes to complete.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](readme_images/createproject.PNG)

* The deployment process performs the following actions: 
  - Creates the application.
  - Creates a Conversation and Tone Analyzer service instance.

Once the deployment is complete, your dashboard should contain the app and the service as shown below. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](readme_images/res.PNG)


<b>5.  After the deployment process has finsihed, select 'VIEW YOUR APP'.</b>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](readme_images/viewyourapp.PNG)

<b>6. The application and service have been successfully deployed, and you are now ready to begin the lab!</b>


# License

  This sample code is licensed under Apache 2.0.
  Full license text is available in [LICENSE](LICENSE).



## Open Source @ IBM

  Find more open source projects on the
  [IBM Github Page](http://ibm.github.io/).

