Step to Configure the Project :
1. RUN : npm install
2. RUN : npm audit fix
3. Open The following file \node_modules\admin-lte\build\less\AdminLTE.less and change the following line:
	
	@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);
	 TO
	@import (css) url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);

4. Run the following code to start tha appliation : ng serve --proxy-config=proxy.conf.json
5. If you get version related problem, then replace the version of devkit in package.json file at line number 66 as below :
	"@angular-devkit/build-angular": "^0.803.24",
Start from the step 1 again.

**production build command
	- ng build --prod --base-href=/dnapi/
