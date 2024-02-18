export const lambdaHandler = (event, context) => {
    event.response = {
        "claimsAndScopeOverrideDetails": {
            "accessTokenGeneration": {
                // 追加したいスコープをここに定義
                "scopesToAdd": [
                    "ROLE_ZENN",
                    "ROLE_QIITA",
                ],
                // 消したいスコープをここに定義
                "scopesToSuppress": [
                    "aws.cognito.signin.user.admin"
                ]
            }
        }
    };

    context.done(null, event);
};
