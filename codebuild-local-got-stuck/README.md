# codebuild-local-got-stuck

CodeBuildをローカルで実行するサンプルです。

## 使い方
https://docs.aws.amazon.com/codebuild/latest/userguide/use-codebuild-agent.html

## ローカルでの実行方法
```bash
./codebuild_build.sh -i public.ecr.aws/codebuild/amazonlinux2-x86_64-standard:5.0 -a app/build/codebuild -l public.ecr.aws/codebuild/local-builds:aarch64 -b buildspec.yml
```