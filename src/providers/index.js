import { createClient } from '@supabase/supabase-js';
import config from '../config';

const supabase = createClient(
  config.supabase.ProjectUrl,
  config.supabase.anonKey
);

const providers = {
  supabase
};

export default providers;
