import { importUserApi } from '@/core/userApi'
import { readFile } from '@/utils/fs'
import { log } from '@/utils/log'
import { toast } from '@/utils/tools'


export const handleImport = (path: string) => {
  // toast(global.i18n.t('setting_backup_part_import_list_tip_unzip'))
  void readFile(path).then(async script => {
    if (script == null) throw new Error('Read file failed')
    await importUserApi(script)
    toast(global.i18n.t('user_api_import_success_tip'))
  }).catch((error: any) => {
    log.error(error.stack)
    toast(global.i18n.t('user_api_import_failed_tip') + '\n' + error.message)
  })
}

